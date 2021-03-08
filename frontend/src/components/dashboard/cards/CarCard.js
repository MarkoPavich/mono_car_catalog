import React from 'react'
import {withNamespaces} from 'react-i18next'
import './CarCard.css'

function CarCard(car){
    const {make, model, engine_abrv, img_url, odo, desc, manufactured, price} = car;
    const {t} = car;
    const header = `${manufactured}. ${make} ${model} ${engine_abrv}`;

    return (
        <div className="c-catalog-item-card">
            <h3>{formatHeader(header)}</h3>
            <div className="c-catalog-card-img-container">
                <img src={img_url} alt="car.img"/>
            </div>
            <div className="c-catalog-card-mileage-price-box">
                <span><strong>{t("carCard.mileage")}:</strong> {odo}</span>
                <span><strong>{t("carCard.price")}:</strong> {price}</span>
            </div>
            <div className="c-catalog-card-desc-box">
                <span>{formatDesc(desc)}</span>
            </div>
            <div className="c-catalog-card-CTA-box">
                <button>{t("carCard.open")}</button>
            </div>  
        </div>
    )
}


/* Helper fns */

function formatHeader(header){
    if(header.length < 29) return header;
    else return header.slice(0, 25) + "...";
}


function formatDesc(desc){
    if(desc.length < 100) return desc;
    else return desc.slice(0, 96) + "...";
}


export default withNamespaces()(CarCard);