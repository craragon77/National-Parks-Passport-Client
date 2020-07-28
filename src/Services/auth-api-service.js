import config from '../config';

const AuthApiService = {
    postLogin(username, password){
        return fetch(`${config.API_ENDPOINT}/api/auth/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                'username': username,
                'password': password
            })
        });
        
    }
};

export default AuthApiService