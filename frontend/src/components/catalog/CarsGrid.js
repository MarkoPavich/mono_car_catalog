import React, {useEffect, useState} from 'react'
import './CarsGrid.css'
import CarCard from './CarCard'
import {vehicles} from './vehicles'
import {toggleMobileSidebar, closeSidebar} from './FiltersSidebar'

function CarsGrid() {
    const [smallScreen, setSmallScreen] = useState(false);


    // Manage 'on screen resize' layout adapting
    useEffect(() => {
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        function checkScreenSize(){
            closeSidebar();
            setSmallScreen(window.innerWidth < 950);
        }

        return function listenerCleanup(){
            window.removeEventListener("resize", checkScreenSize);
        }
    }, []);


    return (
        <div className="c-carsGrid-top-container">
            <header>
                {HeaderToggleOrSpan(smallScreen, 30, 2)}
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

            <footer className="c-carsGrid-pagination-footer">
                <div className="c-carsGrid-pagination-previous-box">
                    <span><a href="#">Prethodna</a></span>
                </div>
                <div className="c-carsGrid-pagination-nums">
                    <span><a href="#">1</a></span>
                    <span><a href="#">2</a></span>
                    <span className="pagination-page-link-current"><a href="#">3</a></span>
                    <span><a href="#">4</a></span>
                    <span><a href="#">...</a></span>
                    
                </div>
                <div className="c-carsGrid-pagination-next-box">
                    <span><a href="#">Iduća</a></span>
                </div>
            </footer>

        </div>
    )
}


export default CarsGrid;


function HeaderToggleOrSpan(smallScreen, resCount, activeFilters){

    const Toggle = (
        <div onClick={toggleMobileSidebar} className="c-carsGrid-filters-mobile-toggle">
            <div className="c-carsGrid-hamburger-ico">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <span>Prikaz filtera</span>
            <div>
                <span>{activeFilters}</span>
            </div>
        </div>
    )

    if(smallScreen) return Toggle;
    else return <span>Broj rezultata: {resCount}</span>
}