import React from 'react';
import { observer } from 'mobx-react-lite';
import { nanoid } from 'nanoid';
import { withNamespaces } from 'react-i18next';
import { useVehiclesStore } from '../StoreProvider';
import VehicleCard from './myVehicles/cards/VehicleCard';
import './MyVehicles.css';

const MyVehicles = observer(({ t }) => {
  const { carsData } = useVehiclesStore();
  const { vehicles } = carsData;

  return (
    <main className="p-myVehicles-top-container">
      <div className="p-myVehicles-inner-container">
        <header>
          <span>{t('pageMyVehicles.pageHeader')}</span>
        </header>
        <section className="p-myvehicles-content-container">
          <header>
            <a href="/#">{t('pageMyVehicles.headerBackHref')}</a>
            <span>{t('pageMyVehicles.headerResCount')}: {vehicles.length}</span>
          </header>
          <div className="p-myVehicles-cards-container">
            {vehicles.map((vehicle) => (
              <VehicleCard key={nanoid()} vehicle={vehicle} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
});

export default withNamespaces()(MyVehicles);
