/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { transitions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import WindowResizeMonitor from './common/WindowResizeMonitor';
import Navbar from './layout/navbar/Navbar';
import Footer from './layout/footer/Footer';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import MyVehicles from '../pages/MyVehicles';
import StoreProvider from '../StoreProvider';
import PrivateRoute from './common/PrivateRoute';

import Alert from './common/Alert';
import AddVehicle from '../pages/AddVehicle';

const alertOptions = {
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE,
};

function App() {
  return (
    <StoreProvider>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <WindowResizeMonitor />
        <Alert />
        <Navbar />
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute
              exact
              path="/add-new-vehicle"
              component={AddVehicle}
            />
            <Route exact path="/my-vehicles-dev" component={MyVehicles} />
            {/* Delete this after markup */}
            <PrivateRoute exact path="/edit-vehicle" component={AddVehicle} />
            <PrivateRoute exact path="/my-vehicles" component={MyVehicles} />
          </Switch>
        </Router>
        <Footer />
      </AlertProvider>
    </StoreProvider>
  );
}

export default App;
