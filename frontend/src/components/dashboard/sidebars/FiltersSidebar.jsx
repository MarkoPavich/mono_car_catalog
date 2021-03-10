import React from 'react';
import './FiltersSidebar.css';
import { withNamespaces } from 'react-i18next';

function SideFilters({ t }) {
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
          <option value="Opel">Opel</option>
          <option value="BMW">BMW</option>
          <option value="hyundai">Hyundai</option>
        </select>
      </div>
      <div className="c-filtersSidebar-filters-unit-container">
        <span>{t('dashboardFilters.fuel')}</span>
        <ul>
          <li>
            <input value="petrol" type="checkbox" />
            Benzin
          </li>
          <li>
            <input value="diesel" type="checkbox" />
            Diesel
          </li>
          <li>
            <input value="Elektro" type="checkbox" />
            Benzin
          </li>
          <li>
            <input value="hybrid" type="checkbox" />
            Benzin
          </li>
        </ul>
      </div>
      <div className="c-filtersSidebar-filters-unit-container">
        <span>{t('dashboardFilters.body')}</span>
        <ul>
          <li>
            <input value="petrol" type="checkbox" />
            Benzin
          </li>
          <li>
            <input value="diesel" type="checkbox" />
            Diesel
          </li>
          <li>
            <input value="Elektro" type="checkbox" />
            Benzin
          </li>
          <li>
            <input value="hybrid" type="checkbox" />
            Benzin
          </li>
        </ul>
      </div>
      <div className="c-filtersSidebar-mobile-confirm-button-box">
        <button type="submit" onClick={closeSidebar}>
          Potvrdi
        </button>
      </div>
    </aside>
  );
}

export default withNamespaces()(SideFilters);

/* Helper fns */
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
