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
        .then(res => {
            //console.log(credentials)
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            //i have been playing with both the upper and lower code blocks cause idk which is better lol
            //if (!res.ok){
              //  return res.status(401).json(`ay you can't come in no girls allowed #gtfo`)
            //}
            //return res.json('ayy it worked in the postLogin thingy')
            
        })
    }
}

export default AuthApiService