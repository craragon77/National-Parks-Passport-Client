import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Signup.css'

export default class Signup extends Component {
    render(){
        return(
            <>
                <body>
                    <h1 className="signup_title">Signup!</h1>
                    <form className="signup-form">
                        <label for="username">Username</label><br/>
                        <input type="test" id="username-input" name="username" /><br/>
                        <label for="password">Password</label><br/>
                        <input type="text" id="password-input" name="password" /><br/> 
                        <label for="password-take2">Please Re-Enter Password</label><br/>
                        <input for="password-take-2" id="password-take-2" name="password-take-2" /><br/>
                        <Link to={'/Dashboard'}>Signup!</Link>
                    </form>
                    
                </body>
            </>
        )
    }
}