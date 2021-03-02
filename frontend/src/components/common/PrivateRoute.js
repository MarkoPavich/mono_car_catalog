import React from 'react'
import {useAuthStore} from '../../StoreProvider'
import {observer} from 'mobx-react-lite'
import {Redirect, Route} from 'react-router-dom' 


const PrivateRoute = observer(({component: Component, ...rest}) => {
    const {isAuthenticated} = useAuthStore();

    return <Route {...rest} render={props => {
        return (
            isAuthenticated
            ? <Component props={props} />
            : <Redirect to="login" />
        )
    }} />
})


export default PrivateRoute;
