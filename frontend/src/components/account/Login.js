import React from 'react'
import ModalRegisterForm from './forms/ModalRegisterForm'
import LoginForm from './forms/LoginForm'
import {useAuthStore} from '../../StoreProvider'
import {observer} from 'mobx-react-lite'
import {Redirect} from 'react-router-dom'
import {withNamespaces} from 'react-i18next'
import './Login.css'


const Login = observer(({t}) => {
    const {authState} = useAuthStore();

    if(authState.isAuthenticated) return <Redirect to="/" />
    else return (
            <React.Fragment>
                <ModalRegisterForm />
                <section className="a-login-register-container">
                    <main className="a-login-register-main-container">
                        <header className="a-login-register-form-header">
                            <h1>Mono Car Catalog</h1>
                            <span>{t("login.header")}</span>
                        </header>
                        <div className="a-login-form-container">
                            <LoginForm />
                        </div>
                    </main>
                </section>
            </React.Fragment>
        )
})


export default withNamespaces()(Login);


//Mono Car Catalog