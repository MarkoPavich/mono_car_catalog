import React from 'react';
import { observer } from 'mobx-react-lite';
import { withNamespaces } from 'react-i18next';
import { useVehiclesStore } from '../../../StoreProvider';

const GridPagination = observer(({ t }) => {
  const store = useVehiclesStore();

  return (
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
  );
});

export default withNamespaces()(GridPagination);
