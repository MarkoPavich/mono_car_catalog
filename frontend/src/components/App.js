import React from 'react'
import Navbar from './layout/navbar/Navbar'
import Footer from './layout/Footer/Footer'
import Login from './account/Login'
import Dashboard from './catalog/Dashboard'
import StoreProvider from '../StoreProvider'
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import PrivateRoute from './common/PrivateRoute'

function App() {
    return(
        <React.Fragment>
            <StoreProvider>
                <Navbar />
                <Router>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <PrivateRoute exact path="/" component={Dashboard} />
                    </Switch>
                </Router>
                <Footer />
            </StoreProvider>
        </React.Fragment>
    )
}


export default App;