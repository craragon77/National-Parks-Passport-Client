import config from '../config'

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
        })
        
    },
    postUser(user){
        return fetch(`${config.API_ENDPOINT}/api/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user),
        })
        .then(res => {
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        })
    }
}

export default AuthApiService