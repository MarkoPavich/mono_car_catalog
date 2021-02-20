import React, {useState} from 'react'

function ModalRegisterForm(){
    const [state, setState] = useState({
        username: "",
        email: "",
        password: "",
        password2: "",
        ToU_check: false
    })

    function handleInput(event){
        if(event.target.type !== "checkbox") setState({...state, [event.target.name]: event.target.value});
        else setState({...state, [event.target.name]: event.target.checked});
    }

    return(
        <div className="a-login-modal-container" id="a-login-modal-container">
            <div className="a-login-form-container a-register-modal-container">
                <button onClick={hideModalRegisterForm} className="a-login-modal-close-btn">X</button>
                <header>
                    <span>Create Your account:</span>
                </header>
                <form className="a-login-register-form">
                    <input
                    onChange={handleInput} 
                    value={state.username} 
                    name="username" 
                    placeholder="Username" 
                    className="a-login-form-input-unit" 
                    type="text"/>
                    <input
                    onChange={handleInput} 
                    value={state.email} 
                    name="email" 
                    placeholder="Email" 
                    className="a-login-form-input-unit" 
                    type="email"/>
                    <input
                    onChange={handleInput} 
                    value={state.password} 
                    name="password" 
                    placeholder="Password" 
                    className="a-login-form-input-unit" 
                    type="password"/>
                    <input
                    onChange={handleInput} 
                    value={state.password2} 
                    name="password2" 
                    placeholder="Confirm Password" 
                    className="a-login-form-input-unit" type="password"/>
                </form>
                <div className="a-login-register-form-ToU-notif-box">
                    <input checked={state.ToU_check} onChange={handleInput} name="ToU_check" type="checkbox"/>
                    <label htmlFor="ToU_check">Accept <a href="#"> terms of use</a></label>
                </div>
                <div className="a-login-register-form-actions">
                    <button>Register</button>
                </div>
            </div>
        </div>
    )
}


export function showModalRegisterForm(event){
    event.preventDefault();

    const modal = document.querySelector("#a-login-modal-container");
    modal.className = "a-login-modal-container modal-form-active"
}


function hideModalRegisterForm(){
    const modal = document.querySelector("#a-login-modal-container");
    modal.className = "a-login-modal-container";
}


export default ModalRegisterForm;