import React from 'react';
import { withNamespaces } from 'react-i18next';
import { toggleMobileSidebar } from '../sidebars/FiltersSidebar';

function HeaderToggleOrSpan({ t, smallScreen, resCount, activeFilters }) {
  const Toggle = (
    <div
      role="button"
      tabIndex={0}
      onKeyDown={toggleMobileSidebar}
      onClick={toggleMobileSidebar}
      className="c-carsGrid-filters-mobile-toggle"
    >
      <div className="c-carsGrid-hamburger-ico">
        <ul>
          <li />
          <li />
          <li />
        </ul>
      </div>
      <span>{t('carsGrid.filtersToggle')}</span>
      <div>
        <span>{activeFilters}</span>
      </div>
    </div>
  );

  const element = smallScreen ? (
    Toggle
  ) : (
    <span>
      {t('carsGrid.hitsCount')}: {resCount}
    </span>
  );

  return element;
}

export default withNamespaces()(HeaderToggleOrSpan);
