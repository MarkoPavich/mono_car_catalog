import { makeObservable, observable, computed, action } from 'mobx';
import vehicles from './mockup/vehicles';
import { carMakes, carBodies, fuelTypes } from './mockup/carsData';
import filtersForms from './templates/filtersForms';

class VehiclesStore {
  constructor() {
    this.vehicles = vehicles;
    this.carMakes = carMakes;
    this.carBodies = carBodies;
    this.fuelTypes = fuelTypes;

    this.filters = filtersForms();

    makeObservable(this, {
      filters: observable,

      setBodyParams: action,
      setFuelParams: action,
      setMakeParam: action,

      activeFilters: computed,
      filteredVehicles: computed,
    });
  }

  setBodyParams = (event) => {
    this.filters.bodyParams[event.target.name] = event.target.checked;
  };

  setFuelParams = (event) => {
    this.filters.fuelParams[event.target.name] = event.target.checked;
  };

  setMakeParam = (event) => {
    this.filters.makeParam = event.target.value;
  };

  get activeFilters() {
    const make = this.filters.makeParam;
    const body = [];
    const fuel = [];

    Object.keys(this.filters.bodyParams).forEach((key) => {
      if (this.filters.bodyParams[key]) body.push(key);
    });
    Object.keys(this.filters.fuelParams).forEach((key) => {
      if (this.filters.fuelParams[key]) fuel.push(key);
    });

    return {
      make,
      body,
      fuel,
    };
  }

  get filteredVehicles() {
    let filtersActive = false;
    let filtered = [];

    if (this.activeFilters.body.length !== 0) {
      filtered = filtered.concat(
        this.vehicles.filter((vehicle) =>
          this.activeFilters.body.includes(vehicle.bodyType)
        )
      );
      filtersActive = true;
    }

    if (this.activeFilters.fuel.length !== 0) {
      filtered = filtered.concat(
        this.vehicles.filter((vehicle) =>
          this.activeFilters.fuel.includes(vehicle.fuelType)
        )
      );
      filtersActive = true;
    }

    if (filtersActive === false) filtered = this.vehicles.slice();

    if (this.activeFilters.make !== '')
      filtered = filtered.filter(
        (vehicle) => vehicle.make === this.filters.makeParam
      );

    return filtered;
  }
}

export default VehiclesStore;
