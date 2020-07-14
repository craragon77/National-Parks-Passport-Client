import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Login.css';
import config from '../../config';
import TokenService from '../../Services/TokenService';
import UserFetchService from '../../Services/UserFetchService';
import AuthApiService from '../../Services/auth-api-service';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handlePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmitBasicAuth = e => {
        e.preventDefault()
        console.log('the handle submit basic auth has activated!')
        let username = this.state.username
        let password = this.state.password
        TokenService.saveAuthToken(
            TokenService.makeBasicAuthToken(username, password)
        )
        UserFetchService.getUserByFullName(username, password)
    }

    fetchLogin = (e) => {
        e.preventDefault()
        console.log('yeet this activated')
        let username = this.state.username
        let password = this.state.password
        console.log(username, password)
        TokenService.saveAuthToken(
            TokenService.makeBasicAuthToken(username, password),
            console.log(TokenService.makeBasicAuthToken(username, password))
        )
        fetch("http://localhost:8000/api/auth/login", {
            method: 'POST',
            headers: {
                'content-type': 'Application/JSON',
                'authorization': `basic ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify( {
                'username': username,
                'password': password
            })
        })
        .then(res => {
            console.log(res)
            if (res.status === 200){
                return res.json()
            }
        })
        .catch((error) => {
            console.log('something went wrong')
        })
    }

    handleSubmitJwtAuth = (e) => {
        e.preventDefault()
        this.setState({error: null})
        let username = this.state.username
        let password = this.state.password
        console.log(username + '+' + password)
        //there was a token service thingy but I deleted it
        AuthApiService.postLogin(username, password)
            //console.log(username + ':' + password)
            .then(authToken => {
                
                //ok so apparently you can't get authToken of undefined (but apparently authToken on its own is undefined)
                console.log(authToken)
                TokenService.saveAuthToken(authToken)
                //i'm told that a loginsuccess() prop is necessary here but idk what that even means
            })
            
            .catch(res => {
                console.dir(res)
            })
    }

    render(){
        return (
            <>
            <body>
                <h1 className="login-title">Login</h1>
                <form className="login-form" onSubmit={this.handleSubmitJwtAuth}>
                    <label for="username">Username</label><br/>
                    <input type="text" id="username-input" name="username" value={this.state.username} onChange={this.handleUsername} required/><br/>
                    <label for="password">Password</label><br/>
                    <input type="text" id="password-input" name="password" value={this.state.password} onChange={this.handlePassword} required/><br/>
                    <button>Submit!</button>
                </form>
            </body>
            </>
        )
    }
}