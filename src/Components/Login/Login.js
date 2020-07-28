import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Login.css';
import TokenService from '../../Services/TokenService';
import AuthApiService from '../../Services/auth-api-service';
import './Login.css';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    handleUsername = (event) => {
        this.setState({
            username: event.target.value
        });
    }

    handlePassword = (event) => {
        this.setState({
            password: event.target.value
        });
    }

    handleSubmitJwtAuth = (e) => {
        e.preventDefault();
        this.setState({error: null});
        let username = this.state.username
        let password = this.state.password
        AuthApiService.postLogin(username, password)
            .then(res => {
                return (!res.ok)
                    ? res.json().then(e => Promise.reject(e), alert('you username and password could not be found at this time'))
                    : res.json()
                
            })
            .then(data => {
                this.setState({
                    username: '',
                    password: ''
                });
                
                TokenService.saveAuthToken(data.authToken)
                TokenService.saveUserId(data.storedId)
            })
            .then(() => {
                window.location.href = '/dashboard';
            })
            .catch(res => {
                console.dir(res);
            })
    }

    render(){
        return (
            <>
            <main>
                <h1 className="login-title">Login</h1>
                <p id="signin-link"><Link to={'/signup'}>Click here</Link> to make an account</p>
                <form className="login-form" onSubmit={this.handleSubmitJwtAuth}>
                    <label htmlFor="username">Username</label><br/>
                    <input type="text" id="username-input" name="username" value={this.state.username} onChange={this.handleUsername} required/><br/>
                    <label htmlFor="password">Password</label><br/>
                    <input type="password" id="password-input" name="password" value={this.state.password} onChange={this.handlePassword} required/><br/>
                    <button>Submit!</button>
                </form>
                <p id="trial-notice">Want to try out the program? Feel free to use the demo account!<br/>Username: Demo<br/>Password: Demo123!</p>
            </main>
            </>
        )
    }
};