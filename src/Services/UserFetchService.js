import TokenService from './TokenService';
import config from '../config';

const UserFetchService = {
    getAllUsers(){
        fetch(`${config.API_ENDPOINT}/api/users`, {
            headers: {
                'authorization': `${TokenService.getAuthToken()}`,
            }
        })
        .then(res => {
            if (res.ok){
                return res.json()
            }
        })
        .catch(() => {
            console.error(`aaaaaaaahhhhhh somethings wrong with the getAllUsers endpoint`)
        })
    },
    getUserById(id){
        return fetch(`${config.API_ENDPOINT}/api/users/id/${id}`, {
            headers: {
                'Authorization': `${TokenService.getAuthToken()}`
            }
        })
    },
    getUserByFullName(fullname){
        fetch(`${config.API_ENDPOINT}/api/users/${fullname}`, {
            headers: {
                'authorization': `basic ${TokenService.getAuthToken()}`
            }
        })
        .then(res => {
            if (res.ok){
                return res.json()
            }
        })
        .catch(() => {
            console.error(`aaaaaaaahhhhhh somethings wrong with the getUserById endpoint`)
        })
    },
    postNewUser(username, password){
        return fetch(`${config.API_ENDPOINT}/api/users/newUser`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                'username': username,
                'password': password
            }),
        })
    }
}

export default UserFetchService;