import React from 'react'
import Navbar from './layout/navbar/Navbar'
import Footer from './layout/Footer/Footer'
import Login from './account/Login'
import Dashboard from './catalog/Dashboard'

function App() {
    return(
        <React.Fragment>
            <Navbar />
            <Dashboard />
            <Footer />
        </React.Fragment>
    )
}

export default App
