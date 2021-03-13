import { carBodies, fuelTypes } from '../mockup/carsData';

export default function filtersForms() {
  const bodyParams = {};
  const fuelParams = {};
  const makeParam = '';

  Object.keys(carBodies).forEach((key) => {
    bodyParams[carBodies[key]] = false;
  });

  Object.keys(fuelTypes).forEach((key) => {
    fuelParams[fuelTypes[key]] = false;
  });

  return { bodyParams, fuelParams, makeParam };
}
