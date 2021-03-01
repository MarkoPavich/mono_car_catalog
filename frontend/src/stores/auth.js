import {makeObservable, observable} from 'mobx'

class Auth {
    constructor(){
        this.isAuthenticated = null
        this.isLoading = null
        this.token = localStorage.getItem("token")

        makeObservable(this, {
            isAuthenticated: observable,
            isLoading: observable,
            token: observable
        })
    }
}


export const authStore = new Auth();