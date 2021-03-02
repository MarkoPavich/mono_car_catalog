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
            requestLogout: action,
        });
    }


    validateLogin = () => {
        if(this.authState.token !== null){
            const request = new Request(`${apiBaseUrl}/auth/user`);
            const options = {...JSON.parse(getOptions), headers: {Authorization: `token ${this.authState.token}`}};

            try{
                fetch(request, options).then(response => {
                    if(response.status !== 200) this.requestLogout();
                })
            }
            catch(error){
                console.log(error)
                this.requestLogout();
            }
        }
        else this.requestLogout;
    }


    requestLogin = (data) => {
        this.authState.isLoading = true;

        const request = new Request(`${apiBaseUrl}/auth/login`);
        const options = {...JSON.parse(postOptions), body: JSON.stringify(data)};

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
                else response.json().then(res => console.log(res))
            })
        }
        catch(error){
            console.log(error);
            this.requestLogout();
        }
    };


    requestLogout = () => {
        this.authState.isLoading = true;

        if(this.authState.token !== null){
            const request = new Request(`${apiBaseUrl}/auth/logout`);
            const options = {...JSON.parse(postOptions)};
            options.headers["Authorization"] = `token ${localStorage.getItem("token")}`;

            try{
                fetch(request, options).then(response => {
                    if(response.status !== 204) response.json().then(res => {
                        console.log("Problem logging out", res);
                    })
                })
            }
            catch(error){
                console.log("Problem logging out", error);
            }
        }
        
        this.authState = {
            ...this.authState,
            isLoading: false,
            isAuthenticated: false,
            user: null,
            token: null
        };
    };
};


export const authStore = new Auth();