import React from 'react';
import { observer } from 'mobx-react-lite';
import { withNamespaces } from 'react-i18next';
import { nanoid } from 'nanoid';
import { useVehiclesStore, useUIStore } from '../../../StoreProvider';
import './FiltersSidebar.css';

const SideFilters = observer(({ t }) => {
  const { sidebarFiltersMenu, closeSidebarMenu } = useUIStore();
  const {
    carMakes,
    carBodies,
    fuelTypes,
    filters,
    setBodyParams,
    setFuelParams,
    setMakeParam,
  } = useVehiclesStore();

  return (
    <aside
      className={sidebarFiltersMenu}
      id="c-filtersSidebar-filter-params-container"
    >
      <button type="button" onClick={closeSidebarMenu}>
        X
      </button>
      <div className="c-filtersSidebar-filters-unit-container">
        <span>{t('dashboardFilters.make')}</span>
        <select
          value={filters.makeParam}
          onChange={setMakeParam}
          name="brand_filter"
          id="brand_filter"
        >
          <option value="">--</option>
          {carMakes
            .slice()
            .sort((a, b) => (a.name > b.name ? -1 : 1))
            .map((carMake) => (
              <option key={nanoid()} value={carMake.id}>
                {carMake.name}
              </option>
            ))}
        </select>
      </div>
      <div className="c-filtersSidebar-filters-unit-container">
        <span>{t('dashboardFilters.fuel')}</span>
        <ul>
          {fuelTypes.map((fuelType) => (
            <li key={nanoid()}>
              <input
                id={fuelType.id}
                name={fuelType.fuel_type}
                type="checkbox"
                checked={filters.fuelParams[fuelType.id]}
                onChange={setFuelParams}
              />
              <label htmlFor={fuelType.id}>
                {t(`vehicleParams.${fuelType.fuel_type}`)}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="c-filtersSidebar-filters-unit-container">
        <span>{t('dashboardFilters.body')}</span>
        <ul>
          {carBodies.map((carBody) => (
            <li key={nanoid()}>
              <input
                id={carBody.id}
                name={carBody.body_type}
                checked={filters.bodyParams[carBody.id]}
                type="checkbox"
                onChange={setBodyParams}
              />
              <label htmlFor={carBody.id}>
                {t(`vehicleParams.${carBody.body_type}`)}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="c-filtersSidebar-mobile-confirm-button-box">
        <button type="submit" onClick={closeSidebarMenu}>
          Potvrdi
        </button>
      </div>
    </aside>
  );
});

export default withNamespaces()(SideFilters);
