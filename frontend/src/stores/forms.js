/* eslint-disable no-param-reassign */
import { makeObservable, observable, action, runInAction } from 'mobx';
import {
  validateAuthForm,
  validateVehicleForm,
} from './services/formsValidators';

import {
  vehicleForm,
  loginForm,
  registerForm,
  inputStatus,
} from './templates/forms';

export default class FormsStore {
  constructor(authStore, vehiclesStore, messages) {
    // Instance form templates
    this.vehicleForm = vehicleForm;
    this.loginForm = loginForm;
    this.registerForm = registerForm;

    this.authStore = authStore; // Used here for handling auth submissions
    this.vehiclesStore = vehiclesStore; // used to submit new vehicles
    this.messages = messages; // Notifications on submissions

    // MOBX decorators
    makeObservable(this, {
      vehicleForm: observable,
      loginForm: observable,
      registerForm: observable,

      setVehicleForm: action,
      setLoginForm: action,
      setRegisterForm: action,
      submitLogin: action,
      markFields: action,
      clearRegisterForm: action,
      setEditMode: action,
      clearVehicleForm: action,
      submitAddEditvehicle: action,
    });
  }

  // set* functions control inputs
  setVehicleForm = (event) => {
    this.vehicleForm[event.target.name].value = event.target.value;
  };

  setLoginForm = (event) => {
    this.loginForm[event.target.name].value = event.target.value;
  };

  setRegisterForm = (event) => {
    if (event.target.type !== 'checkbox')
      this.registerForm[event.target.name].value = event.target.value;
    else this.registerForm[event.target.name].value = event.target.checked;
  };

  clearRegisterForm = () => {
    this.registerForm = registerForm;
  };

  clearVehicleForm = () => {
    this.vehicleForm = vehicleForm;
  };

  submitLogin = () => {
    // Generate data container to reduce dot notaitions a bit..
    const data = {
      username: this.loginForm.username.value,
      password: this.loginForm.password.value,
    };

    // Submit to form validator
    const status = validateAuthForm(data); // Will return an object with isValid and error tooltips
    // Pass form and tooltips to input marking function
    this.markFields(this.loginForm, status.tooltips);

    // If valid, call login method from authStore and clear password input
    if (status.isValid) {
      this.authStore.requestLogin(data);
      this.loginForm.password.value = '';
    }
  };

  // Similar to the above
  submitRegister = (event) => {
    event.preventDefault();
    const data = {};

    // Longer form so generate data container programmatically
    Object.keys(this.registerForm).forEach((key) => {
      data[key] = this.registerForm[key].value;
    });

    const status = validateAuthForm(data);
    this.markFields(this.registerForm, status.tooltips);
    if (status.isValid) {
      this.authStore.requestNewAccount(data);
    }
  };

  submitAddEditvehicle = async (vehicleID) => {
    const data = {};

    Object.keys(this.vehicleForm).forEach((key) => {
      data[key] = this.vehicleForm[key].value;
    });

    const status = validateVehicleForm(data);
    this.markFields(this.vehicleForm, status.tooltips);

    if (status.isValid) {
      const isStored = await this.vehiclesStore.addVehicle(data, vehicleID);
      if (isStored) {
        runInAction(() => {
          this.vehicleForm = vehicleForm; // Clear form
        });

        // Notify add or edit success
        this.messages.commonConfirmation(
          vehicleID
            ? this.messages.commonConfirmations.vehicleEdited
            : this.messages.commonConfirmations.vehicleAdded
        );
        // Always true at this point
        return isStored; // Everything OK, proceed to navigate away from form
      }
      // Always false at this point
      return isStored; // Something wrong, but handled in vehiclesStore
    }

    this.messages.commonError(this.messages.commonErrors.invalidVehicleForm);

    return status.isValid;
  };

  markFields = (form, tooltips) => {
    // Loop over every field in form
    Object.keys(tooltips).forEach((key) => {
      if (tooltips[key]) {
        // truthy tooltip means error
        form[key].class = inputStatus.error; // Apply error CSS classname to field and provide tooltip
        form[key].tooltip = tooltips[key];
      } else {
        // falsy tooltip - revert field classname and clear tooltip
        form[key].class = inputStatus.normal;
        form[key].tooltip = '';
      }
    });
  };

  setEditMode = (vehicleID) => {
    // Get vehicle object
    const vehicle = this.vehiclesStore.getVehicle(vehicleID);
    // get make object
    let make;
    Object.keys(this.vehiclesStore.carsData.carMakes).forEach((key) => {
      if (this.vehiclesStore.carsData.carMakes[key].id === vehicle.make.id)
        make = key;
    });
    // Adapt data
    const vehicleData = {
      ...vehicle,
      model: vehicle.model.name,
      bodyType: vehicle.bodyType.id,
      fuelType: vehicle.fuelType.id,
      make,
    };
    // Apply data to form
    Object.keys(this.vehicleForm).forEach((key) => {
      this.vehicleForm[key].value = vehicleData[key];
    });
  };
}
