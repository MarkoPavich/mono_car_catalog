import { apiBaseUrl, getOptions } from './config';

class VehiclesServices {
  static async getVehiclesList() {
    const request = new Request(`${apiBaseUrl}/data/vehicles/`);
    const response = await fetch(request, JSON.parse(getOptions));
    return response.json();
  }

  static async getVehiclesData() {
    const requests = {
      carMakes: new Request(`${apiBaseUrl}/data/carmakes/`),
      fuelTypes: new Request(`${apiBaseUrl}/data/fueltypes/`),
      bodyTypes: new Request(`${apiBaseUrl}/data/bodytypes/`),
    };

    const makesResponse = await fetch(
      requests.carMakes,
      JSON.parse(getOptions)
    );
    const fuelTypesResponse = await fetch(
      requests.fuelTypes,
      JSON.parse(getOptions)
    );
    const bodyTypesResponse = await fetch(
      requests.bodyTypes,
      JSON.parse(getOptions)
    );

    const carMakes = await makesResponse.json();
    const fuelTypes = await fuelTypesResponse.json();
    const bodyTypes = await bodyTypesResponse.json();

    return { carMakes, fuelTypes, bodyTypes };
  }
}

export default VehiclesServices;
