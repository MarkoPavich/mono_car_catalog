import React from 'react'
import './FiltersSidebar.css'

function SideFilters() {
    return (
        <aside className="c-filtersSidebar-filter-params-container">
            <div className="c-filtersSidebar-filters-unit-container">
                <span>Marka</span>
                <select name="brand_filter" id="brand_filter">
                    <option value="Opel">Opel</option>
                    <option value="BMW">BMW</option>
                    <option value="hyundai">Hyundai</option>
                </select>
            </div>
            <div className="c-filtersSidebar-filters-unit-container">
                <span>Motor</span>
                <ul>
                    <li><input value="petrol" type="checkbox"/>Benzin</li>
                    <li><input value="diesel" type="checkbox"/>Diesel</li>
                    <li><input value="Elektro" type="checkbox"/>Benzin</li>
                    <li><input value="hybrid" type="checkbox"/>Benzin</li>
                </ul>
            </div>
            <div className="c-filtersSidebar-filters-unit-container">
                <span>Oblik Šasije</span>
                <ul>
                    <li><input value="petrol" type="checkbox"/>Benzin</li>
                    <li><input value="diesel" type="checkbox"/>Diesel</li>
                    <li><input value="Elektro" type="checkbox"/>Benzin</li>
                    <li><input value="hybrid" type="checkbox"/>Benzin</li>
                </ul>
            </div>
        </aside>
    )
}

export default SideFilters
