import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Login extends Component {
    render(){
        return (
            <>
            <header className="header">
                <p>Nav</p>
            </header>
            <body>
                <h1>Login</h1>
                <form className="form">
                    <label for="username">Username</label><br/>
                    <input type="test" id="username-input" name="username" /><br/>
                    <label for="passwor">Password</label><br/>
                    <input type="text" id="password-input" name="password" /><br/>
                    <Link to={'/Dashboard'}>Login!</Link>
                </form>
            </body>
            <footer className="footer">
                <p>Made by Chris Aragon</p>
            </footer>
            </>
        )
    }
}