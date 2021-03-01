import {makeObservable, observable, action, runInAction} from 'mobx'
import {apiBaseUrl, getOptions, postOptions} from './config'

class Auth {
    constructor(){
        this.authState = {
            isLoading: false,
            isAuthenticated: null,
            token: localStorage.getItem("token"),
            user: null
        }

        makeObservable(this, {
            authState: observable,
            requestLogin: action,
            logOut: action,
            validateLogIn: action
        });
    }


    validateLogIn = () => {
        const request = new Request(`${apiBaseUrl}/auth/user`);
        const options = {...getOptions, headers: {Authorization: `token ${this.authState.token}`}};

        try{
            fetch(request, options).then(response => {
                if(response.status !== 200) this.logOut();
            })
        }
        catch(error){
            console.log(error)
            this.logOut();
        }
    }

    requestLogin = (data) => {
        this.authState.isLoading = true;

        const request = new Request(`${apiBaseUrl}/auth/login`);
        const options = {...postOptions, body: JSON.stringify(data)};

        try{
            fetch(request, options).then(response => {

                if(response.status === 200) response.json().then(res => {
                    runInAction(() => {
                        this.authState = {
                            ...this.authState,
                            isLoading: false,
                            isAuthenticated: true,
                            user: res.user,
                            token: res.token
                        }
                        localStorage.setItem("token", res.token)
                    })
                })
                else this.logOut();
            })
        }
        catch(error){
            console.log(error);
            this.logOut();
        }
    };


    logOut = () => {
        localStorage.clear("token");

        this.authState = {
            ...this.authState,
            isLoading: false,
            isAuthenticated: false,
            user: null,
            token: null
        }

        /* logout request */
        
    };


    getUser = () => {
        const request = new Request(`${apiBaseUrl}/auth/user`);
        const options = {...getOptions};
        options["Authorization"] = localStorage.getItem("token")

        try{
            fetch(request, options).then(response => {
                console.log(response);
                console.log(this.token)
            })
        }
        catch(error){
            console.log(error)
        }
    }
};


export const authStore = new Auth();