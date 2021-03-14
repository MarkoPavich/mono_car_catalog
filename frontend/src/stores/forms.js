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
  constructor(authStore) {
    this.vehicleForm = vehicleForm;
    this.loginForm = loginForm;
    this.registerForm = registerForm;

    this.authStore = authStore;

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
    });
  }

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

  submitLogin = () => {
    const data = {
      username: this.loginForm.username.value,
      password: this.loginForm.password.value,
    };

    const status = validateForm(data);
    this.markFields(this.loginForm, status.tooltips);

    if (status.isValid) {
      this.authStore.requestLogin(data);
      this.loginForm.password.value = '';
    }
  };

  submitRegister = (event) => {
    event.preventDefault();
    const data = {};
    Object.keys(this.registerForm).forEach((key) => {
      data[key] = this.registerForm[key].value;
    });

    const status = validateForm(data);
    this.markFields(this.registerForm, status.tooltips);
    if (status.isValid) {
      this.authStore.requestNewAccount(data);
    }
  };

  markFields = (form, tooltips) => {
    Object.keys(tooltips).forEach((key) => {
      if (tooltips[key]) {
        form[key].class = inputStatus.error;
        form[key].tooltip = tooltips[key];
      } else {
        form[key].class = inputStatus.normal;
        form[key].tooltip = '';
      }
    });
  };
}
