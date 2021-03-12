import React from 'react';
import { observer } from 'mobx-react-lite';
import { nanoid } from 'nanoid';
import { withNamespaces } from 'react-i18next';
import { useVehiclesStore, useUIStore } from '../../../StoreProvider';
import CarCard from '../cards/CarCard';
import HeaderToggleOrSpan from './HeaderToggleOrSpan';
import './CarsGrid.css';

const CarsGrid = observer(({ t }) => {
  const { vehicles } = useVehiclesStore();
  const { carsGridSmallScreen } = useUIStore();

  return (
    <div className="c-carsGrid-top-container">
      <header>
        <HeaderToggleOrSpan
          smallScreen={carsGridSmallScreen}
          resCount={30}
          activeFilters={2}
        />
        <div className="c-carsGrid-header-sort-filter">
          <label htmlFor="cars_grid_sort_filter">
            {t('carsGrid.sortFilter')}:{' '}
          </label>
          <select name="cars_grid_sort_filter" id="">
            <option value="manufacture_date">Nazivu - od A do Z</option>
            <option value="manufacture_date">Godištu - manje prema više</option>
            <option value="manufacture_date">Godištu - više prema manje</option>
            <option value="manufacture_date">Cijeni - manje prema više</option>
            <option value="manufacture_date">Cijeni - više prema manje</option>
          </select>
        </div>
      </header>
      <div className="c-carsGrid-card-container">
        {vehicles.map((vehicle) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <CarCard key={nanoid()} vehicle={vehicle} t={t} />
        ))}
      </div>

      <footer className="c-carsGrid-pagination-footer">
        <div className="c-carsGrid-pagination-previous-box">
          <span>
            <a href="#">{t('pagination.previous')}</a>
          </span>
        </div>
        <div className="c-carsGrid-pagination-nums">
          <span>
            <a href="#">1</a>
          </span>
          <span>
            <a href="#">2</a>
          </span>
          <span className="pagination-page-link-current">
            <a href="#">3</a>
          </span>
          <span>
            <a href="#">4</a>
          </span>
          <span>
            <a href="#">...</a>
          </span>
        </div>
        <div className="c-carsGrid-pagination-next-box">
          <span>
            <a href="#">{t('pagination.next')}</a>
          </span>
        </div>
      </footer>
    </div>
  );
});

export default withNamespaces()(CarsGrid);
