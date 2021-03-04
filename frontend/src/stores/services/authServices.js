import {apiBaseUrl, postOptions, getOptions} from '../config'


class AuthServices {

    async validateToken(token){
        const request = new Request(`${apiBaseUrl}/auth/user`);
        const options = {...JSON.parse(getOptions), headers: {Authorization: `token ${token}`}};
    
        const response = await fetch(request, options);
        const data = await response.json();
    
        return {user: data, status: response.status}
    }


    async login(loginData){
        const request = new Request(`${apiBaseUrl}/auth/login`);
        const options = {...JSON.parse(postOptions), body: JSON.stringify(loginData)};

        const response = await fetch(request, options);
        const data = await response.json();

        return {...data, status: response.status};
    }

    async logout(token){
        const request = new Request(`${apiBaseUrl}/auth/logout`);
        const options = {...JSON.parse(postOptions)};
        options.headers["Authorization"] = `token ${token}`;

        return await fetch(request, options);
    }
}


export const authServices = new AuthServices;