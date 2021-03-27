// This is a temporary dataset used to complete the project with an emphasis on JavaScript
// Future versions will have this imported from backend as JSON

export const carMakes = {
  opel: {
    id: '214a691b-b162-43d0-9d48-a66864b3c6de',
    name: 'Opel',
  },
  bmw: {
    id: 'e88f6ec3-8026-4766-a181-c5f98b6973d3',
    name: 'BMW',
  },
  lada: {
    id: '22be36cc-5eb2-489b-8eb0-9fc1258aeb15',
    name: 'Lada',
  },
  vw: {
    id: '637f83f3-c950-4efe-a92b-0228b273c58c',
    name: 'VW',
  },
  peugeot: {
    id: 'ea09cbc6-2558-4b6b-ad71-49eeedd55d42',
    name: 'Peugeot',
  },
  renault: {
    id: 'c6f427ef-cc26-4156-91f5-986fd29a9ff8',
    name: 'Renault',
  },
  hyundai: {
    id: 'ec1a33af-d37f-4874-9fad-3ee700d6239f',
    name: 'Hyundai',
  },
  kia: {
    id: 'a1446b44-e779-4396-8ddc-ad72b43d9cb1',
    name: 'KIA',
  },
  mazda: {
    id: 'ccc5a7ca-30d4-4cdb-9686-87fa75923001',
    name: 'Mazda',
  },
  audi: {
    id: '569f1f5b-feff-4bd0-b0a6-5e10de2300b8',
    name: 'Audi',
  },
  seat: {
    id: '6bab6628-55ff-4477-a6a9-fae4ba7e5f20',
    name: 'Seat',
  },
  toyota: {
    id: '1e755b3a-b851-4af1-a1b3-4fffcbec5481',
    name: 'Toyota',
  },
  astonMartin: {
    id: '09be740e-2cd7-4f35-b7cd-586f57645955',
    name: 'Aston Martin',
  },
};

// First key is carMake ID, second model ID
export const carModels = {
  '569f1f5b-feff-4bd0-b0a6-5e10de2300b8': { 0: { name: 'A4' } },
  'ec1a33af-d37f-4874-9fad-3ee700d6239f': { 0: { name: 'Elantra' } },
  '09be740e-2cd7-4f35-b7cd-586f57645955': { 0: { name: 'DB5' } },
};

export const carBodies = {
  compact: 'compact',
  coupe: 'coupe',
  sedan: 'sedan',
  stationWagon: 'stationWagon',
  suv: 'suv',
};

export const fuelTypes = {
  petrol: 'petrol',
  diesel: 'diesel',
  LPG: 'LPG',
  BEV: 'BEV',
  hybrid: 'hybrid',
};
