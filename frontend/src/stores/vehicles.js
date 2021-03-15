import { makeObservable, observable, computed, action } from 'mobx';
import vehicles from './mockup/vehicles';
import { carMakes, carModels, carBodies, fuelTypes } from './mockup/carsData';
import sortOptions from './mockup/sortOptions';
import filtersForms from './templates/filtersForms';

class VehiclesStore {
  constructor() {
    // Imported datasets
    this.vehicles = vehicles;
    this.carMakes = carMakes;
    this.carModels = carModels;
    this.carBodies = carBodies;
    this.fuelTypes = fuelTypes;
    this.sortOptions = sortOptions;

    this.filters = filtersForms(); // Get filtering params forms

    // MOBX
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

  // set* functions control inputs
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
    const make = this.filters.makeParam; // Set filter by make state
    const body = [];
    const fuel = [];

    // Parse bodyType and fuelType params forms and push active to arrays
    Object.keys(this.filters.bodyParams).forEach((key) => {
      if (this.filters.bodyParams[key]) body.push(key);
    });
    Object.keys(this.filters.fuelParams).forEach((key) => {
      if (this.filters.fuelParams[key]) fuel.push(key);
    });

    // Return active (selected) filtering options
    return {
      make,
      body,
      fuel,
    };
  }

  get filteredVehicles() {
    // Get vehicles array
    let filtered =
      this.activeFilters.make !== '' // If active, filter by make
        ? this.vehicles.filter(
            (vehicle) => vehicle.make.name === this.activeFilters.make
          )
        : this.vehicles;

    // if any selected, further filter by matching vehicle bodyType in bodyType filters array
    if (this.activeFilters.body.length !== 0)
      filtered = filtered.filter((vehicle) =>
        this.activeFilters.body.includes(vehicle.bodyType)
      );

    // if any selected, further filter by matching vehicle fuelType in fuelType filters array
    if (this.activeFilters.fuel.length !== 0)
      filtered = filtered.filter((vehicle) =>
        this.activeFilters.fuel.includes(vehicle.fuelType)
      );

    return this.sortVehicles(filtered); // Apply sorting to filtered vehicles, and return
  }

  sortVehicles = (filteredVehicles) => {
    // simple sort filteredVehicles array by object properties
    switch (this.filters.sortFilter) {
      case this.sortOptions.modelNameAsc:
        return filteredVehicles.sort((a, b) =>
          a.make.name.toLowerCase() > b.make.name.toLowerCase() ? 1 : -1
        );

      case this.sortOptions.modelNameDesc:
        return filteredVehicles.sort((a, b) =>
          a.make.name.toLowerCase() > b.make.toLowerCase() ? -1 : 1
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
