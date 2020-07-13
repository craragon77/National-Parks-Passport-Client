import config from '../config'

const TokenService = {
    saveAuthToken(token){
        window.localStorage.setItem(config.TOKEN_KEY, token)
    },
    getAuthToken(){
        return window.localStorage.getItem(config.TOKEN_KEY)
    },
    clearAuthToken(){
        window.localStorage.removeItem(config.TOKEN_KEY)
    },
    hasAuthToken(){
        console.log('!!TokenService.getAuthToken()')
        return !!TokenService.getAuthToken()
    },
    makeBasicAuthToken(username, password){
        return window.btoa(`${username}:${password}`)
    }
}

export default TokenService