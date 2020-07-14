import config from '../config'

const AuthApiService = {
    postLogin(credentials){
        return fetch(`${config.API_ENDPOINT}/api/auth/login`, {
            method: 'POST',
            headers: {
                'content-typo': 'application/json',
            },
            body: JSON.stringify(credentials)
        })
        .then(res => {
            //console.log(credentials)
            //(!res.ok)
              //  ? res.json().then(e => Promise.reject(e))
                //: res.json()
            //i have been playing with both the upper and lower code blocks cause idk which is better lol
            return res.status(401).json({
                error: {message: 'aaaaaaahhhhhhhhh'}
            })
            
        })
    }
}

export default AuthApiService