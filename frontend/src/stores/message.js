import { makeObservable, action, observable } from 'mobx';

class MessageStore {
  constructor() {
    this.message = {
      txt: '',
      type: null,
    };

    this.types = {
      success: 'success',
      error: 'error',
      info: 'info',
    };

    this.commonErrors = {
      userExists: 'userExists',
      emailExists: 'emailExists',
      invalidLogin: 'invalidLogin',
    };

    this.commonConfirmations = {
      userRegistered: 'userRegistered',
      userLogged: 'userLogged',
    };

    makeObservable(this, {
      message: observable,
      createSuccess: action,
      createInfo: action,
      createError: action,
      commonError: action,
      commonConfirmation: action,
    });
  }

  createSuccess = (txt) => {
    this.message = {
      txt,
      type: this.types.success,
    };
  };

  createError = (txt) => {
    this.message = {
      txt,
      type: this.types.error,
    };
  };

  createInfo = (txt) => {
    this.message = {
      txt,
      type: this.types.info,
    };
  };

  commonError = (type) => {
    this.message = {
      txt: '',
      type: this.commonErrors[type],
    };
  };

  commonConfirmation = (type, txt) => {
    this.message = {
      txt: txt || '',
      type: this.commonConfirmations[type],
    };
  };
}

export default MessageStore;
