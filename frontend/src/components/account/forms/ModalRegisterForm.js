import React, {useState} from 'react'
import {observer} from 'mobx-react-lite'
import {withNamespaces} from 'react-i18next'
import {useAuthStore} from '../../../StoreProvider'
import {validateInputs, clearInputs} from './validation'

const ModalRegisterForm = observer(({t}) => {
    const {authState, requestNewAccount} = useAuthStore();

    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        password2: "",
        ToU_check: false
    })


    function handleInput(event){
        if(event.target.type !== "checkbox") setForm({...form, [event.target.name]: event.target.value});
        else setForm({...form, [event.target.name]: event.target.checked});
    }


    async function handleSubmit(){
        const inputs = {
            username: document.querySelector("#a-login-modal-container > div > form > div:nth-child(1) > input"),
            email: document.querySelector("#a-login-modal-container > div > form > div:nth-child(2) > input"),
            password: document.querySelector("#a-login-modal-container > div > form > div:nth-child(3) > input"),
            password2: document.querySelector("#a-login-modal-container > div > form > div:nth-child(4) > input"),
            touCheck: document.querySelector("#a-login-modal-container > div > div.a-login-register-form-ToU-notif-box > div > input[type=checkbox]")
        }

        if(validateInputs(inputs, t)){
            const errors = await requestNewAccount({
                username: form.username,
                email: form.email,
                password: form.password
            });

            if(errors){
                console.log(errors);
            }
        }
    }

    return(
        <div className="a-login-modal-container" id="a-login-modal-container">
            <div className="a-login-form-container a-register-modal-container">
                <button onClick={hideModalRegisterForm} className="a-login-modal-close-btn">X</button>
                <header>
                    <span>{t("login.registerFormHeader")}:</span>
                </header>
                <form className="a-login-register-form">
                    <div className="a-login-form-input-container">
                        <input
                        onChange={handleInput} 
                        value={form.username} 
                        name="username" 
                        placeholder={t("common.username")[0].toUpperCase() + t("common.username").slice(1)}
                        className="a-login-form-input-unit input-error" 
                        data-tooltip="Invalid username"
                        type="text"/>
                    </div>
                    <div className="a-login-form-input-container">
                        <input
                        onChange={handleInput} 
                        value={form.email} 
                        name="email" 
                        placeholder={t("common.email")[0].toUpperCase() + t("common.email").slice(1)}
                        className="a-login-form-input-unit" 
                        type="email"/>
                    </div>
                    <div className="a-login-form-input-container">
                        <input
                        onChange={handleInput} 
                        value={form.password} 
                        name="password" 
                        placeholder={t("common.password")[0].toUpperCase() + t("common.password").slice(1)} 
                        className="a-login-form-input-unit" 
                        type="password"/>
                    </div>
                    <div className="a-login-form-input-container">
                        <input
                        onChange={handleInput} 
                        value={form.password2} 
                        name="password2" 
                        placeholder={t("common.confirmPass")[0].toUpperCase() + t("common.confirmPass").slice(1)} 
                        className="a-login-form-input-unit" type="password"/>
                    </div>
                </form>
                <div className="a-login-register-form-ToU-notif-box">
                    <div className="a-login-form-tou-input-container">
                        <input checked={form.ToU_check} onChange={handleInput} name="ToU_check" type="checkbox"/>
                        <label htmlFor="ToU_check"><a href="#">{t("login.tou")}</a></label>
                    </div>
                </div>
                <div className="a-login-register-form-actions">
                    <button onClick={handleSubmit}>{authState.isLoading ? t("common.loading") : t("login.submit")}</button>
                </div>
            </div>
        </div>
    )
})


export function showModalRegisterForm(event){
    event.preventDefault();

    const modal = document.querySelector("#a-login-modal-container");
    modal.className = "a-login-modal-container modal-form-active"
}


function hideModalRegisterForm(){
    const inputs = {
        username: document.querySelector("#a-login-modal-container > div > form > div:nth-child(1) > input"),
        email: document.querySelector("#a-login-modal-container > div > form > div:nth-child(2) > input"),
        password: document.querySelector("#a-login-modal-container > div > form > div:nth-child(3) > input"),
        password2: document.querySelector("#a-login-modal-container > div > form > div:nth-child(4) > input"),
        touCheck: document.querySelector("#a-login-modal-container > div > div.a-login-register-form-ToU-notif-box > div > input[type=checkbox]")
    }

    clearInputs(inputs);

    const modal = document.querySelector("#a-login-modal-container");
    modal.className = "a-login-modal-container";
}


export default withNamespaces()(ModalRegisterForm);