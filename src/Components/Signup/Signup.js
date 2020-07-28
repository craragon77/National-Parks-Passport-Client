import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Signup.css';
import UserFetchService from '../../Services/UserFetchService';
import './Signup.css';


export default class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            password2: '',
            error: null
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
    handleRepeatPassword = (event) => {
        this.setState({
            password2: event.target.value
        });
    }

    handleNickname = (event) => {
        this.setState({
            nickname: event.target.value
        });
    }

    handleNewRegistration = (e) => {
        e.preventDefault();
        let username = this.state.username
        let password = this.state.password

        if (this.state.password !== this.state.password2){
            return alert('your two passwords do not match. Please ensure that they are identical');
        } else {
            UserFetchService.postNewUser(username, password)
            .then(res => {
                return (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            })
            .then(data => {
                this.setState({
                    username: '',
                    password: '',
                    password2: ''
                })
            })
            .then(() => {
                alert(`Horray! You have successfully made an account! You will now be redirected to the login page to access your account!`);
                this.props.history.push('/login');
            })
            .catch((error) => {
                console.error(alert(Object.values(error)));
            })
        }
    }
        
    render(){
        return(
            <>
                <body>
                    <h1 className="signup_title">Signup!</h1>
                    <p id="login-link">Already have an account? <br/><Link to='/Login'>Click here</Link> to log in</p>
                    <form className="signup-form" onSubmit={this.handleNewRegistration}>
                        <label for="username">Username</label><br/>
                        <input type="text" id="username-input" name="username" value={this.state.username} onChange={this.handleUsername}/><br/>
                        
                        <label for="password">Password <br/>(requires one upper and lower case letter, a number, and symbol)</label><br/>
                        <input type="password" id="password-input" name="password" value={this.state.password} onChange={this.handlePassword}/><br/> 
                        <label for="password-take2">Please Re-Enter Password</label><br/>
                        <input type="password" for="password-take-2" id="password-take-2" name="password2" value={this.state.password2} onChange={this.handleRepeatPassword} required/><br/>
                        <button>Sign me up!</button>
                    </form>
                    
                </body>
            </>
        )
    }
};