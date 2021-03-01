import React from 'react'
import Navbar from './layout/navbar/Navbar'
import Footer from './layout/Footer/Footer'
import Login from './account/Login'
import Dashboard from './catalog/Dashboard'
import StoreProvider from '../StoreProvider'

function App() {
    return(
        <React.Fragment>
            <StoreProvider>
                <Navbar />
                <Login />
                <Footer />
            </StoreProvider>
        </React.Fragment>
    )
}


export default App;
