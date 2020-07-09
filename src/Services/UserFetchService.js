import TokenService from './TokenService';
import config from '../config';

const UserFetchService = {
    getAllUsers(){
        fetch(`${config.API_ENDPOINT}/api/users`, {
            headers: {
                'authorization': `basic ${TokenService.getAuthToken()}`,
                //headers will go in here
            }
        })
        .then(res => {
            if (res.ok){
                return res.json()
            }
        })
        .then(resJson => {
            console.log(resJson)
        })
        .catch(() => {
            console.log(`aaaaaaaahhhhhh somethings wrong with the getAllUsers endpoint`)
        })
    },
    getUserById(userId){
        fetch(`${config.API_ENDPOINT}/api/users/${userId}`, {
            headers: {
                'authorization': `basic ${TokenService.getAuthToken()}`,
                //headers will go in here
            }
        })
        .then(res => {
            if (res.ok){
                return res.json()
            }
        })
        .then(resJson => {
            console.log(resJson)
        })
        .catch(() => {
            console.log(`aaaaaaaahhhhhh somethings wrong with the getUserById endpoint`)
        })
    },
    getUserByFullName(fullname){
        fetch(`${config.API_ENDPOINT}/api/users/${fullname}`, {
            headers: {
                'authorization': `basic ${TokenService.getAuthToken()}`
                //headers will go in here
            }
        })
        .then(res => {
            if (res.ok){
                return res.json()
            }
        })
        .then(resJson => {
            console.log(resJson)
        })
        .catch(() => {
            console.log(`aaaaaaaahhhhhh somethings wrong with the getUserById endpoint`)
        })
    },
    postNewUser(username, password, nickname){
        let endpoint = `${config.API_ENDPOINT}/api/users`
        fetch(endpoint, {
            headers: {
                'content-type': 'application/json',
                'authorization': `basic ${TokenService.getAuthToken()}`,
                //i wonder whats gonna go in here
            },
            body: JSON.stringify({
                'username': username,
                'password': password,
                'nickname': nickname
            })
        })
        .then(res => {
            console.log(config.API_ENDPOINT)
            
            if (res.status == 201){
                console.log('user successfully posted')
                res.json()
            } else {
                console.log('the `else` has activated, yo')
            }
        })
        .catch(() => {
            console.log(`Sweet Jesus, the postNewUser isn't working!`)
            console.log(endpoint)
        })
    }
}

export default UserFetchService;