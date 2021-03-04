import {makeObservable, observable, action, runInAction} from 'mobx'
import {authServices} from './services/authServices'


class AuthStore {
    constructor(messages){
        this.authState = {
            isLoading: false,
            isAuthenticated: null,
            token: localStorage.getItem("token"),
            user: null
        }

        this.messages = messages;

        makeObservable(this, {
            authState: observable,
            requestLogin: action,
            requestLogout: action,
            getUser: action
        });
    }


    getUser = async () => {
        if(this.authState.token !== null){
            this.loading = true;

            try{
                const data = await authServices.validateToken(this.authState.token);
                if(data.status !== 200) this.requestLogout();
                else runInAction(() => {
                    this.authState = {
                        ...this.authState,
                        isLoading: false,
                        isAuthenticated: true,
                        user: data.user
                    }
                })
            }
            catch(error){
                this.requestLogout();
                console.log(error)
            }

        }
        else this.requestLogout();
    }


    validateLogin = async () => {
        if(this.authState.token !== null){
            try{
                const {status} = await authServices.validateToken(this.authState.token)
                    if(status !== 200) this.requestLogout();
            }
            catch(error){
                console.log(error)
                this.requestLogout();
            }
        }
        else {
            this.requestLogout();
        };
    }


    requestLogin = async (loginData) => {
        this.authState.isLoading = true;

        try{
            const data = await authServices.login(loginData);
            if(data.status === 200){
                runInAction(() => {
                    this.authState = {
                        ...this.authState,
                        isLoading: false,
                        isAuthenticated: true,
                        user: data.user,
                        token: data.token
                    }
                    localStorage.setItem("token", data.token);
                    this.messages.createSuccess(`Welcome, ${data.user.username}`)
                })
            }
            else {
                console.log(data),
                this.requestLogout();
            }
        }
        catch(error){
            console.log(error);
            this.requestLogout();
        }
    };


    requestLogout = async () => {
        this.authState.isLoading = true;

        if(this.authState.token !== null){
            try{
                const response = await authServices.logout(this.authState.token);
                if(response.status !== 204) console.log("invalid token");
            }
            catch(error){
                console.log("Problem logging out", error);
            }
        }
        
        runInAction(() => {
            localStorage.clear("token");
            this.authState = {
                ...this.authState,
                isLoading: false,
                isAuthenticated: false,
                user: null,
                token: null
            }
        })
    };
};


export default AuthStore;