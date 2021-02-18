import React from 'react'
import Navbar from './layout/navbar/Navbar'
import Footer from './layout/Footer/Footer'
import Login from './account/Login'

function App() {
    return(
        <React.Fragment>
            <Navbar />
            <Login />
            <Footer />
        </React.Fragment>
    )
}

export default App
