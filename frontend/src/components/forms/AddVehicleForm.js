import React from 'react'
import {observer} from 'mobx-react-lite'
import {withNamespaces} from 'react-i18next'

const AddVehicleForm = observer(({t}) => {
    return (
        <form className="f-addVehicle-form">
            <section>
                <header>
                    <span>{t("vehicleForm.basicInfoHeader")}</span>    
                </header>
                <div className="f-addVehicle-form-input-grid-container">
                    <div className="f-addVehicle-form-input-unit">
                        <label htmlFor="vehicleMake">{t("vehicleForm.make")}</label>
                        <select name="vehicleMake">
                            <option value="BMW">BMW</option>
                            <option value="Opel">Opel</option>
                        </select>
                    </div>
                    <div className="f-addVehicle-form-input-unit">
                        <label htmlFor="vehicleModel">{t("vehicleForm.model")}</label>
                        <input placeholder={t("vehicleFormPlaceholders.model")} name="vehicleModel" type="text"/>
                    </div>
                    <div className="f-addVehicle-form-input-unit">
                        <label htmlFor="vehicleVariant">{t("vehicleForm.variant")}</label>
                        <input placeholder={t("vehicleFormPlaceholders.variant")} name="vehicleVariant" placeholder="GTI, GTC, Plus.." type="text"/>
                    </div>
                    <div className="f-addVehicle-form-input-unit">
                        <label htmlFor="vehicleManufactured">{t("vehicleForm.manufactured")}</label>
                        <input name="vehicleManufactured" type="month"/>
                    </div>
                    <div className="f-addVehicle-form-input-unit">
                        <label htmlFor="vehicleMileage">{t("vehicleForm.mileage")}</label>
                        <input placeholder={t("vehicleFormPlaceholders.mileage")} name="vehicleMileage" type="number"/>
                    </div>
                </div>
            </section>
            <section>
                <header>
                    <span>{t("vehicleForm.extraInfoSubheader")}</span>
                </header>
                <div className="f-addVehicle-form-input-grid-container">
                    <div className="f-addVehicle-form-input-unit">
                        <label htmlFor="vehicleBodyType">{t("vehicleForm.bodyType")}</label>
                        <select name="vehicleBodyType">
                            <option value="BMW">BMW</option>
                            <option value="Opel">Opel</option>
                        </select>
                    </div>
                    <div className="f-addVehicle-form-input-unit">
                        <label htmlFor="vehicleFuelType">{t("vehicleForm.fuelType")}</label>
                        <select name="vehicleFuelType">
                            <option value="BMW">Benzin</option>
                            <option value="Opel">Elektro</option>
                        </select>
                    </div>
                </div>
                <div className="f-addVehicle-form-longInput-container">
                    <div className="f-addVehicle-form-longInput-unit">
                        <label htmlFor="vehicleImage">{t("vehicleForm.img")}</label>
                        <input name="vehicleImage" placeholder="http://www..." type="text"/>                      
                    </div>
                    <div className="f-addVehicle-form-longInput-textarea-unit">
                        <label htmlFor="vehicleDesc">{t("vehicleForm.description")}</label>
                        <textarea name="vehicleDesc" id="vehicleDesc" cols="30" rows="10"></textarea>                    
                    </div>
                </div>
                <div className="f-addVehicle-form-input-grid-container">
                    <div className="f-addVehicle-form-input-unit">
                        <label htmlFor="vehiclePrice"><strong>{t("vehicleForm.price")}:</strong></label>
                        <input name="vehiclePrice" type="number"/>
                    </div>
                    <div className="f-addVehicle-spacer"></div>
                    <div className="f-addVehicle-form-actions-container">
                        <a href="/">{t("vehicleForm.backLink")}</a>
                        <button>{t("vehicleForm.submit")}</button>
                    </div>
                </div>
            </section>
        </form>
    )
})

export default withNamespaces()(AddVehicleForm);
