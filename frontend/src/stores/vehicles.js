import { makeObservable, observable, computed, action } from 'mobx';
import vehicles from './mockup/vehicles';
import { carMakes, carBodies, fuelTypes } from './mockup/carsData';
import sortOptions from './mockup/sortOptions';
import filtersForms from './templates/filtersForms';

class VehiclesStore {
  constructor() {
    this.vehicles = vehicles;
    this.carMakes = carMakes;
    this.carBodies = carBodies;
    this.fuelTypes = fuelTypes;
    this.sortOptions = sortOptions;

    this.filters = filtersForms();

    makeObservable(this, {
      filters: observable,

      setBodyParams: action,
      setFuelParams: action,
      setMakeParam: action,
      setSortFilter: action,

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

  setSortFilter = (event) => {
    this.filters.sortFilter =
      sortOptions[event.target.value] || sortOptions.manufDateAsc;
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
    let filtered =
      this.activeFilters.make !== ''
        ? this.vehicles.filter(
            (vehicle) => vehicle.make === this.activeFilters.make
          )
        : this.vehicles;

    if (this.activeFilters.body.length !== 0)
      filtered = filtered.filter((vehicle) =>
        this.activeFilters.body.includes(vehicle.bodyType)
      );

    if (this.activeFilters.fuel.length !== 0)
      filtered = filtered.filter((vehicle) =>
        this.activeFilters.fuel.includes(vehicle.fuelType)
      );

    return this.sortVehicles(filtered);
  }

  sortVehicles = (filteredVehicles) => {
    switch (this.filters.sortFilter) {
      case this.sortOptions.modelNameAsc:
        return filteredVehicles.sort((a, b) =>
          a.make.toLowerCase() > b.make.toLowerCase() ? 1 : -1
        );

      case this.sortOptions.modelNameDesc:
        return filteredVehicles.sort((a, b) =>
          a.make.toLowerCase() > b.make.toLowerCase() ? -1 : 1
        );

      case this.sortOptions.manufDateAsc:
        return filteredVehicles.sort((a, b) =>
          a.manufactureDate > b.manufactureDate ? 1 : -1
        );

      case this.sortOptions.manufDateDesc:
        return filteredVehicles.sort((a, b) =>
          a.manufactureDate > b.manufactureDate ? -1 : 1
        );

      case this.sortOptions.priceAsc:
        return filteredVehicles.sort((a, b) => (a.price > b.price ? 1 : -1));

      case this.sortOptions.priceDesc:
        return filteredVehicles.sort((a, b) => (a.price > b.price ? -1 : 1));

      default:
        return filteredVehicles;
    }
  };
}

export default VehiclesStore;
