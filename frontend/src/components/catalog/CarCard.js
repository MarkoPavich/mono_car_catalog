import React, {useEffect} from 'react'
import './CarCard.css'

function CarCard(car){
    const {make, model, engine_abrv, img_url, odo, desc, manufactured} = car;

    return (
        <div className="c-catalog-item-card">
            <h3>{`${manufactured}. ${make} ${model} ${engine_abrv}`}</h3>
            <div className="c-catalog-card-img-container">
                <img src={img_url} alt="car.img"/>
            </div>
            <div className="c-catalog-card-mileage-box">
                <span>Stanje: {odo}</span>
            </div>
            <div className="c-catalog-card-desc-box">
                <span>{desc} ... <a href="#">Read more</a></span>
            </div>
            <div className="c-catalog-card-CTA-box">
                <button>Otvori</button>
            </div>  
        </div>
    )
}

export default CarCard
