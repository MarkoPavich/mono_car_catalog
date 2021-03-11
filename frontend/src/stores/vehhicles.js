import { makeObservable, observable } from 'mobx';
import vehicles from './mockup/vehicles';
import { carMakes, carBodies, fuelTypes } from './mockup/carsData';

class VehiclesStore {
  constructor() {
    this.isLoading = false;

    this.vehicles = vehicles;
    this.carMakes = carMakes;
    this.carBodies = carBodies;
    this.fuelTypes = fuelTypes;

    makeObservable(this, {
      isLoading: observable,
      vehicles: observable,
    });
  }
}

export default VehiclesStore;
