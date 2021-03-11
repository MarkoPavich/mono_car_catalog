import React from 'react';
import { observer } from 'mobx-react-lite';
import { withNamespaces } from 'react-i18next';
import { useFormsStore } from '../../StoreProvider';

const AddVehicleForm = observer(({ t }) => {
  const { vehicleForm, updateVehicleForm } = useFormsStore();

  return (
    <form className="f-addVehicle-form">
      <section>
        <header>
          <span>{t('vehicleForm.basicInfoHeader')}</span>
        </header>
        <div className="f-addVehicle-form-input-grid-container">
          <div className="f-addVehicle-form-input-unit">
            <label htmlFor="make">{t('vehicleForm.make')}</label>
            <select
              onChange={updateVehicleForm}
              value={vehicleForm.make}
              name="make"
            >
              <option value="BMW">BMW</option>
              <option value="Opel">Opel</option>
            </select>
          </div>
          <div className="f-addVehicle-form-input-unit">
            <label htmlFor="model">{t('vehicleForm.model')}</label>
            <input
              onChange={updateVehicleForm}
              value={vehicleForm.model}
              placeholder={t('vehicleFormPlaceholders.model')}
              name="model"
              type="text"
            />
          </div>
          <div className="f-addVehicle-form-input-unit">
            <label htmlFor="variant">{t('vehicleForm.variant')}</label>
            <input
              onChange={updateVehicleForm}
              value={vehicleForm.variant}
              placeholder={t('vehicleFormPlaceholders.variant')}
              name="variant"
              type="text"
            />
          </div>
          <div className="f-addVehicle-form-input-unit">
            <label htmlFor="manufactureDate">
              {t('vehicleForm.manufactured')}
            </label>
            <input
              onChange={updateVehicleForm}
              value={vehicleForm.manufactureDate}
              name="manufactureDate"
              type="month"
            />
          </div>
          <div className="f-addVehicle-form-input-unit">
            <label htmlFor="mileage">{t('vehicleForm.mileage')}</label>
            <input
              onChange={updateVehicleForm}
              value={vehicleForm.mileage}
              placeholder={t('vehicleFormPlaceholders.mileage')}
              name="mileage"
              type="number"
            />
          </div>
        </div>
      </section>
      <section>
        <header>
          <span>{t('vehicleForm.extraInfoSubheader')}</span>
        </header>
        <div className="f-addVehicle-form-input-grid-container">
          <div className="f-addVehicle-form-input-unit">
            <label htmlFor="bodyType">{t('vehicleForm.bodyType')}</label>
            <select
              onChange={updateVehicleForm}
              value={vehicleForm.bodyType}
              name="bodyType"
            >
              <option value="BMW">BMW</option>
              <option value="Opel">Opel</option>
            </select>
          </div>
          <div className="f-addVehicle-form-input-unit">
            <label htmlFor="fuelType">{t('vehicleForm.fuelType')}</label>
            <select
              onChange={updateVehicleForm}
              value={vehicleForm.fuelType}
              name="fuelType"
            >
              <option value="BMW">Benzin</option>
              <option value="Opel">Elektro</option>
            </select>
          </div>
        </div>
        <div className="f-addVehicle-form-longInput-container">
          <div className="f-addVehicle-form-longInput-unit">
            <label htmlFor="img">{t('vehicleForm.img')}</label>
            <input
              onChange={updateVehicleForm}
              value={vehicleForm.img}
              name="img"
              placeholder="http://www..."
              type="text"
            />
          </div>
          <div className="f-addVehicle-form-longInput-textarea-unit">
            <label htmlFor="description">{t('vehicleForm.description')}</label>
            <textarea
              onChange={updateVehicleForm}
              value={vehicleForm.description}
              name="description"
              id="vehicleDesc"
              cols="30"
              rows="10"
            />
          </div>
        </div>
        <div className="f-addVehicle-form-input-grid-container">
          <div className="f-addVehicle-form-input-unit">
            <label htmlFor="price">
              <strong>{t('vehicleForm.price')}:</strong>
            </label>
            <input
              onChange={updateVehicleForm}
              value={vehicleForm.price}
              name="price"
              type="number"
            />
          </div>
          <div className="f-addVehicle-spacer" />
          <div className="f-addVehicle-form-actions-container">
            <a href="/">{t('vehicleForm.backLink')}</a>
            <button type="submit">{t('vehicleForm.submit')}</button>
          </div>
        </div>
      </section>
    </form>
  );
});

export default withNamespaces()(AddVehicleForm);