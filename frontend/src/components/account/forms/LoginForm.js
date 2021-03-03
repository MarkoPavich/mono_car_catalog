import React, {useState} from 'react'
import {showModalRegisterForm} from './ModalRegisterForm'
import {useAuthStore} from '../../../StoreProvider'
import {observer} from 'mobx-react-lite'


const LoginForm = observer(() => {
    const {requestLogin, authState} = useAuthStore();
    const {isLoading} = authState;

    const [state, setState] = useState({
        username: "",
        password: ""
    })


    function handleInput(event){
        setState({...state, [event.target.name]: event.target.value});
    }


    function handleSubmitLogin(event){
        event.preventDefault();

        requestLogin({
            username: state.username,
            password: state.password
        })
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
                <button onClick={handleSubmitLogin}>{isLoading ? "Loading" : "Log in"}</button>
            </div>
            <div className="a-login-form-divider-line"></div>
            <div className="a-login-form-alt-action-button-box">
                <button onClick={showModalRegisterForm}>Create new account</button>
            </div>
        </form>
    )
})


export default LoginForm;