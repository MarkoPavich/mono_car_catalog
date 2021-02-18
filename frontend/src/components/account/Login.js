import React, {useEffect} from 'react'
import './Login.css'

function Login() {

    return (
        <section className="a-login-register-container">
            <main className="a-login-register-main-container">
                <header className="a-login-register-form-header">
                    <h1>Mono Car Catalog</h1>
                    <span>A community powered database of available vehicles</span>
                </header>
                <div className="a-login-form-container">
                    <form className="a-login-form">
                        <div className="a-login-form-input-unit">
                            <input placeholder="Username" 
                            type="text"/>
                        </div>
                        <div className="a-login-form-input-unit">
                            <input 
                            data-classname="a-login-form-input-unit"
                            placeholder="Password" 
                            type="password"/>
                        </div>
                        <div className="a-login-form-action-button-box">
                            <button>Log in</button>
                        </div>
                        <div className="a-login-form-divider-line"></div>
                        <div className="a-login-form-alt-action-button-box">
                            <button>Create new account</button>
                        </div>
                    </form>
                </div>
            </main>
        </section>
    )
}


export default Login
