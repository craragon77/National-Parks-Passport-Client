import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Signup extends Component {
    render(){
        return(
            <>
                <header classname="header">
                    <p>Nav</p>
                </header>
                <body>
                    <h1>Signup!</h1>
                    <form classname="form">
                        <label for="username">Username</label><br/>
                        <input type="test" id="username-input" name="username" /><br/>
                        <label for="password">Password</label><br/>
                        <input type="text" id="password-input" name="password" /><br/> 
                        <label for="password-take2">Please Re-Enter Password</label><br/>
                        <input for="password-take-2" id="password-take-2" name="password-take-2" />
                    </form>
                    <Link to={'/Dashboard'}>Signup!</Link>
                </body>
                <footer classname="footer">
                    <p>Made by Chris Aragon</p>
                </footer>
            </>
        )
    }
}