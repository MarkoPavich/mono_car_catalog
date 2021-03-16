/* eslint-disable no-param-reassign */
import { makeObservable, observable, action } from 'mobx';
import validateForm from './services/validateForm';

import {
  vehicleForm,
  loginForm,
  registerForm,
  inputStatus,
} from './templates/forms';

export default class FormsStore {
  constructor(authStore, vehiclesStore) {
    // Instance form templates
    this.vehicleForm = vehicleForm;
    this.loginForm = loginForm;
    this.registerForm = registerForm;

    this.authStore = authStore; // Used here for handling auth submissions
    this.vehiclesStore = vehiclesStore; // used to submit new vehicles

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
    this.vehicleForm = {
      ...this.vehicleForm,
      [event.target.name]: event.target.value,
    };
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
    Object.keys(this.registerForm).forEach((key) => {
      this.registerForm[key].value = '';
      this.registerForm[key].class = inputStatus.normal;
      this.registerForm[key].tooltip = '';
    });
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
    const status = validateForm(data); // Will return an object with isValid and error tooltips
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

    const status = validateForm(data);
    this.markFields(this.registerForm, status.tooltips);
    if (status.isValid) {
      this.authStore.requestNewAccount(data);
    }
  };

  submitAddEditvehicle = (vehicleID) => {
    this.vehiclesStore.addVehicle(this.vehicleForm, vehicleID);
    this.vehicleForm = vehicleForm; // Clear form
    return true; // TODO - confirmation and validation
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
    Object.keys(this.vehiclesStore.carMakes).forEach((key) => {
      if (this.vehiclesStore.carMakes[key].id === vehicle.make.id) make = key;
    });
    // Set form
    this.vehicleForm = {
      ...vehicle,
      model: vehicle.model.name,
      make,
    };
  };
}
