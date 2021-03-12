import React from 'react';
import { observer } from 'mobx-react-lite';
import { withNamespaces } from 'react-i18next';
import { nanoid } from 'nanoid';
import { useVehiclesStore } from '../../../StoreProvider';
import './FiltersSidebar.css';

export function toggleMobileSidebar() {
  const sidebarClassName = 'c-filtersSidebar-filter-params-container';
  const activeClassName = `${sidebarClassName} c-filtersSidebar-modal-active`;

  document.querySelector(
    '.c-filtersSidebar-filter-params-container'
  ).className = activeClassName;
}

export function closeSidebar() {
  const sidebarClassName = 'c-filtersSidebar-filter-params-container';
  document.querySelector(
    '.c-filtersSidebar-filter-params-container'
  ).className = sidebarClassName;
}

const SideFilters = observer(({ t }) => {
  const { carMakes, carBodies, fuelTypes } = useVehiclesStore();

  return (
    <aside
      className="c-filtersSidebar-filter-params-container"
      id="c-filtersSidebar-filter-params-container"
    >
      <button type="button" onClick={closeSidebar}>
        X
      </button>
      <div className="c-filtersSidebar-filters-unit-container">
        <span>{t('dashboardFilters.make')}</span>
        <select name="brand_filter" id="brand_filter">
          {Object.keys(carMakes).map((key) => (
            <option key={nanoid()} value={carMakes[key]}>
              {carMakes[key]}
            </option>
          ))}
        </select>
      </div>
      <div className="c-filtersSidebar-filters-unit-container">
        <span>{t('dashboardFilters.fuel')}</span>
        <ul>
          {Object.keys(fuelTypes).map((fuelKey) => (
            <li key={nanoid()}>
              <input
                id={fuelTypes[fuelKey]}
                name={fuelTypes[fuelKey]}
                value={fuelTypes[fuelKey]}
                type="checkbox"
              />
              <label htmlFor={fuelTypes[fuelKey]}>
                {t(`vehicleParams.${fuelTypes[fuelKey]}`)}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="c-filtersSidebar-filters-unit-container">
        <span>{t('dashboardFilters.body')}</span>
        <ul>
          {Object.keys(carBodies).map((bodyKey) => (
            <li key={nanoid()}>
              <input
                id={carBodies[bodyKey]}
                name={carBodies[bodyKey]}
                value={carBodies[bodyKey]}
                type="checkbox"
              />
              <label htmlFor={carBodies[bodyKey]}>
                {t(`vehicleParams.${carBodies[bodyKey]}`)}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="c-filtersSidebar-mobile-confirm-button-box">
        <button type="submit" onClick={closeSidebar}>
          Potvrdi
        </button>
      </div>
    </aside>
  );
});

export default withNamespaces()(SideFilters);
