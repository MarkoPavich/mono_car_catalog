import { apiBaseUrl, postOptions, getOptions } from './config';

class VehiclesServices {
  static async getVehiclesList() {
    const request = new Request(`${apiBaseUrl}/data/vehicles/`);
    const response = await fetch(request, JSON.parse(getOptions));
    return response.json();
  }

  static async getCarMakes() {
    const request = new Request(`${apiBaseUrl}/data/carmakes/`);

    const response = await fetch(request, JSON.parse(getOptions));
    const carMakes = await response.json();

    return carMakes;
  }

  static async getFuelTypes() {
    const request = new Request(`${apiBaseUrl}/data/fueltypes/`);

    const response = await fetch(request, JSON.parse(getOptions));
    const fuelTypes = await response.json();

    return fuelTypes;
  }

  static async getBodyTypes() {
    const request = new Request(`${apiBaseUrl}/data/bodytypes/`);

    const response = await fetch(request, JSON.parse(getOptions));
    const bodyTypes = await response.json();

    return bodyTypes;
  }
}

export default VehiclesServices;
