import { makeObservable, observable, action } from 'mobx';
import { vehicleForm, loginForm, registerForm } from './templates/forms';

export default class FormsStore {
  constructor() {
    this.vehicleForm = vehicleForm;
    this.loginForm = loginForm;
    this.registerForm = registerForm;

    makeObservable(this, {
      vehicleForm: observable,
      loginForm: observable,
      registerForm: observable,
      setVehicleForm: action,
      setLoginForm: action,
      setRegisterForm: action,
    });
  }

  setVehicleForm = (event) => {
    console.log(event.target.value)
    this.vehicleForm = {
      ...this.vehicleForm,
      [event.target.name]: event.target.value,
    };
  };

  setLoginForm = (event) => {
    this.loginForm = {
      ...this.loginForm,
      [event.target.name]: event.target.value,
    };
  };

  setRegisterForm = (event) => {
    if (event.target.type !== 'checkbox')
      this.registerForm = {
        ...this.registerForm,
        [event.target.name]: event.target.value,
      };
    else
      this.registerForm = {
        ...this.registerForm,
        [event.target.name]: event.target.checked,
      };
  };
}
