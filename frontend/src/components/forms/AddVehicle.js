import React from 'react'
import {observer} from 'mobx-react-lite'
import './AddVehicle.css'
import AddVehicleForm from './AddVehicleForm'
import {withNamespaces} from 'react-i18next'

const AddVehicle = observer (({t}) => {

    return (
        <main className="f-addVehicle-top-container">
            <div className="f-addVehicle-inner-container">
                <header>
                    <span>{t("vehicleForm.header")}</span>
                </header>
                <div className="f-addVehicle-form-container">
                    <AddVehicleForm />
                </div>
            </div>
        </main>
    )
})

export default withNamespaces()(AddVehicle);