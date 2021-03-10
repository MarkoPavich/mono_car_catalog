import React from 'react';
import { observer } from 'mobx-react-lite';
import { withNamespaces } from 'react-i18next';
import './AddVehicle.css';
import AddVehicleForm from './AddVehicleForm';

const AddVehicle = observer(({ t }) => (
  <main className="f-addVehicle-top-container">
    <div className="f-addVehicle-inner-container">
      <header>
        <span>{t('vehicleForm.header')}</span>
      </header>
      <div className="f-addVehicle-form-container">
        <AddVehicleForm />
      </div>
    </div>
  </main>
));

export default withNamespaces()(AddVehicle);
