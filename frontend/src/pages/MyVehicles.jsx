import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { withNamespaces } from 'react-i18next';
import { useVehiclesStore } from '../StoreProvider';
import './MyVehicles.css';

const MyVehicles = observer(() => {
  const { carsData } = useVehiclesStore();
  const { vehicles } = carsData;

  const vehicle = vehicles[0];
  const { manufactureDate, make, model, variant, img } = vehicle;

  const header = `${manufactureDate.slice(0, 4)}. ${make.name} ${
    model.name
  } ${variant}`;

  return (
    <main className="p-myVehicles-top-container">
      <div className="p-myVehicles-inner-container">
        <header>
          <span>Moja Vozila</span>
        </header>
        <section className="p-myvehicles-content-container">
          <header>
            <a href="/#">Povratak</a>
            <span>Broj rezultata: 0</span>
          </header>
          <div className="p-myVehicles-cards-container">
            <div className="p-myVehicles-carCard-unit">
              <div className="p-myVehicles-carCard-img-container">
                <img src={img} alt="vehicle.jpg" />
              </div>
              <div className="p-myVehicles-carCard-dataBox">
                <div>
                  <span>{header}</span>
                </div>
              </div>
              <div className="p-myVehicles-carCard-optionsBox">
                <button>Delete</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
});

export default withNamespaces()(MyVehicles);
