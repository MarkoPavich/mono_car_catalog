import {makeObservable, action, observable} from 'mobx'

class MessageStore {
    constructor(){
        this.message = {
            txt: "",
            type: null
        };

        this.types = {
            success: "success",
            error: "error",
            info: "info"
        }

        makeObservable(this, {
            message: observable,
            createSuccess: action,
            createInfo: action,
            createError: action
        });
    }


    createSuccess = (txt) => {
        this.message = {
            txt: txt,
            type: this.types.success
        }
    }


    createError = (txt) => {
        this.message = {
            txt: txt,
            type: this.types.error
        }
    }


    createInfo = (txt) => {
        this.message = {
            txt: txt,
            type: this.types.info
        }
    }
}


export default MessageStore;