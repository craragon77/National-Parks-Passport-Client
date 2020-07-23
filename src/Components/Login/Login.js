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

    handleSubmitJwtAuth = (e) => {
        e.preventDefault()
        this.setState({error: null})
        let username = this.state.username
        let password = this.state.password
        console.log(username + '+' + password)
        //there was a token service thingy but I deleted it
        AuthApiService.postLogin(username, password)
            //console.log(username + ':' + password)
            .then(res => {
                console.log(res)
                
                return (!res.ok)
                    ? res.json().then(e => Promise.reject(e), alert('you username and password could not be found at this time'))
                    : res.json()
                //i have been playing with both the upper and lower code blocks cause idk which is better lol
                //if (!res.ok){
                  //  return res.status(401).json(`ay you can't come in no girls allowed #gtfo`)
                //}
                //return res.json('ayy it worked in the postLogin thingy')
                
            })
            .then(data => {
                this.setState({
                    username: '',
                    password: ''
                })
                //ok so apparently you can't get authToken of undefined (but apparently authToken on its own is undefined)
                console.log(data)
                
                TokenService.saveAuthToken(data.authToken)
                TokenService.saveUserId(data.storedId)
                //i'm told that a loginsuccess() prop is necessary here but idk what that even means
            })
            .then(() => {
                this.props.history.push('/dashboard')
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