import React from 'react'
import './CarsGrid.css'
import CarCard from './CarCard'
import {vehicles} from './vehicles'

function CarsGrid() {
    return (
        <div className="c-carsGrid-top-container">
            <header>
                <span>Broj rezultata: 25</span>
                <div className="c-carsGrid-header-sort-filter">
                    <label htmlFor="">Sortiraj po: </label>
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
                {vehicles.map(car => {
                    return <CarCard key={car.id} {...car} />
                })}
            </div>
        </div>
    )
}

export default CarsGrid;