import React from 'react'
import './Dashboard.css'
import FiltersSidebar from './FiltersSidebar'
import CarsGrid from './CarsGrid'

function Dashboard() {
    return (
        <main className="c-dashboard-container">
            <FiltersSidebar />
            <CarsGrid />
        </main>
    )
}


export default Dashboard
