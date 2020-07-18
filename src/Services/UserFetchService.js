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
    //where will the program get the userId? from context? or what?
    getUserById(id){
        //where is this ID gonna come from?
        fetch(`${config.API_ENDPOINT}/api/users/id/${id}`, {
            headers: {
                'Authorization': `${TokenService.getAuthToken()}`,
                //headers will go in here
            }
        })
        .then(res => {
            if (res.ok){
                return res.json()
            }
        })
        .then(resJson => {
            let userInfo = resJson
            console.log(userInfo)
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