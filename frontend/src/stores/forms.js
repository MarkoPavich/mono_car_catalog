import { makeObservable, observable, action } from 'mobx';
import { vehicleForm } from './templates/forms';

export default class FormsStore {
  constructor() {
    this.vehicleForm = vehicleForm;

    makeObservable(this, {
      vehicleForm: observable,
      updateVehicleForm: action,
    });
  }

  updateVehicleForm = (event) => {
    this.vehicleForm = {
      ...this.vehicleForm,
      [event.target.name]: event.target.value,
    };
  };
}
