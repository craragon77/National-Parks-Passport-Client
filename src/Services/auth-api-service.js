import config from '../config'

const AuthApiService = {
    postLogin(credentials){
        return fetch(`${config.API_ENDPOINT}/api/auth/login`, {
            method: 'POST',
            headers: {
                'content-typo': 'application/json',
            }
        })
        .then(res => {
            if (!res.ok){
                return(
                    res.status(400).json({
                        error: {message: 'aaaaahhhhh the auth-api-service thingy is mad at you!'}
                    })
                )

            }
            res.json('ayyy it worked')
        })
    }
}

export default AuthApiService