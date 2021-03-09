import React from 'react'
import Navbar from './layout/navbar/Navbar'
import Footer from './layout/Footer/Footer'
import Login from './account/Login'
import Dashboard from './dashboard/Dashboard'
import StoreProvider from '../StoreProvider'
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import PrivateRoute from './common/PrivateRoute'
import {transitions, Provider as AlertProvider} from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import Alert from './layout/Alert'
import AddVehicle from './forms/AddVehicle'

const alertOptions = {  
    timeout: 5000,
    offset: '30px',
    transition: transitions.SCALE
}

function App() {
    return(
        <StoreProvider>
            <AlertProvider template={AlertTemplate} {...alertOptions}>
                <Alert />
                <Navbar />
                <Router>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <PrivateRoute exact path="/" component={Dashboard} />
                        <PrivateRoute exact path="/add-new-vehicle" component={AddVehicle} />
                    </Switch>
                </Router>
                <Footer />
            </AlertProvider>
        </StoreProvider>
    )
}


export default App;