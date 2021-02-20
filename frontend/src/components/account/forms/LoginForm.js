import React, {useState} from 'react'
import {showModalRegisterForm} from './ModalRegisterForm'

function LoginForm(){
    const [state, setState] = useState({
        username: "",
        password: ""
    })

    function handleInput(event){
        setState({...state, [event.target.name]: event.target.value});
    }

    return(
        <form className="a-login-form">
            <input
            name="username"
            onChange={handleInput} 
            value={state.username} 
            className="a-login-form-input-unit" 
            placeholder="Username" type="text"/>
            <input
            name="password"
            onChange={handleInput} 
            value={state.password} 
            className="a-login-form-input-unit" 
            placeholder="Password" type="password"/>
            <div className="a-login-form-action-button-box">
                <button>Log in</button>
            </div>
            <div className="a-login-form-divider-line"></div>
            <div className="a-login-form-alt-action-button-box">
                <button onClick={showModalRegisterForm}>Create new account</button>
            </div>
        </form>
    )
}


export default LoginForm;