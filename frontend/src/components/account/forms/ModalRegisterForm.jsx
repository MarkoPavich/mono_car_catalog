import React from 'react';
import { observer } from 'mobx-react-lite';
import { withNamespaces } from 'react-i18next';
import { useAuthStore, useFormsStore } from '../../../StoreProvider';
import { validateInputs, clearInputs } from './validation';

const ModalRegisterForm = observer(({ t }) => {
  const { authState, requestNewAccount } = useAuthStore();
  const { registerForm, setRegisterForm } = useFormsStore();

  async function handleSubmit() {
    const inputs = {
      username: document.querySelector(
        '#a-login-modal-container > div > form > div:nth-child(1) > input'
      ),
      email: document.querySelector(
        '#a-login-modal-container > div > form > div:nth-child(2) > input'
      ),
      password: document.querySelector(
        '#a-login-modal-container > div > form > div:nth-child(3) > input'
      ),
      password2: document.querySelector(
        '#a-login-modal-container > div > form > div:nth-child(4) > input'
      ),
      touCheck: document.querySelector(
        '#a-login-modal-container > div > div.a-login-register-form-ToU-notif-box > div > input[type=checkbox]'
      ),
    };

    if (validateInputs(inputs, t)) {
      const errors = await requestNewAccount({
        username: registerForm.username,
        email: registerForm.email,
        password: registerForm.password,
      });

      if (errors) {
        console.log(errors);
      }
    }
  }

  return (
    <div className="a-login-modal-container" id="a-login-modal-container">
      <div className="a-login-form-container a-register-modal-container">
        <button
          type="button"
          onClick={hideModalRegisterForm}
          className="a-login-modal-close-btn"
        >
          X
        </button>
        <header>
          <span>{t('login.registerFormHeader')}:</span>
        </header>
        <form className="a-login-register-form">
          <div className="a-login-form-input-container">
            <input
              onChange={setRegisterForm}
              value={registerForm.username}
              name="username"
              placeholder={
                t('common.username')[0].toUpperCase() +
                t('common.username').slice(1)
              }
              className="a-login-form-input-unit input-error"
              data-tooltip="Invalid username"
              type="text"
            />
          </div>
          <div className="a-login-form-input-container">
            <input
              onChange={setRegisterForm}
              value={registerForm.email}
              name="email"
              placeholder={
                t('common.email')[0].toUpperCase() + t('common.email').slice(1)
              }
              className="a-login-form-input-unit"
              type="email"
            />
          </div>
          <div className="a-login-form-input-container">
            <input
              onChange={setRegisterForm}
              value={registerForm.password}
              name="password"
              placeholder={
                t('common.password')[0].toUpperCase() +
                t('common.password').slice(1)
              }
              className="a-login-form-input-unit"
              type="password"
            />
          </div>
          <div className="a-login-form-input-container">
            <input
              onChange={setRegisterForm}
              value={registerForm.password2}
              name="password2"
              placeholder={
                t('common.confirmPass')[0].toUpperCase() +
                t('common.confirmPass').slice(1)
              }
              className="a-login-form-input-unit"
              type="password"
            />
          </div>
        </form>
        <div className="a-login-register-form-ToU-notif-box">
          <div className="a-login-form-tou-input-container">
            <input
              checked={registerForm.ToU_check}
              onChange={setRegisterForm}
              name="ToU_check"
              type="checkbox"
            />
            <label htmlFor="ToU_check">
              <a href="#">{t('login.tou')}</a>
            </label>
          </div>
        </div>
        <div className="a-login-register-form-actions">
          <button type="submit" onClick={handleSubmit}>
            {authState.isLoading ? t('common.loading') : t('login.submit')}
          </button>
        </div>
      </div>
    </div>
  );
});

export function showModalRegisterForm(event) {
  event.preventDefault();

  const modal = document.querySelector('#a-login-modal-container');
  modal.className = 'a-login-modal-container modal-form-active';
}

function hideModalRegisterForm() {
  const inputs = {
    username: document.querySelector(
      '#a-login-modal-container > div > form > div:nth-child(1) > input'
    ),
    email: document.querySelector(
      '#a-login-modal-container > div > form > div:nth-child(2) > input'
    ),
    password: document.querySelector(
      '#a-login-modal-container > div > form > div:nth-child(3) > input'
    ),
    password2: document.querySelector(
      '#a-login-modal-container > div > form > div:nth-child(4) > input'
    ),
    touCheck: document.querySelector(
      '#a-login-modal-container > div > div.a-login-register-form-ToU-notif-box > div > input[type=checkbox]'
    ),
  };

  clearInputs(inputs);

  const modal = document.querySelector('#a-login-modal-container');
  modal.className = 'a-login-modal-container';
}

export default withNamespaces()(ModalRegisterForm);
