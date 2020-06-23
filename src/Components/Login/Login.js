import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Login.css';

export default class Login extends Component {
    render(){
        return (
            <>
            <body>
                <h1 className="login-title">Login</h1>
                <form className="login-form">
                    <label for="username">Username</label><br/>
                    <input type="test" id="username-input" name="username" /><br/>
                    <label for="passwor">Password</label><br/>
                    <input type="text" id="password-input" name="password" /><br/>
                    <Link to={'/Dashboard'}>Login!</Link>
                </form>
            </body>
            </>
        )
    }
}