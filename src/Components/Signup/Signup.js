import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Signup.css'
import UserFetchService from '../../Services/UserFetchService';
import TokenService from '../../Services/TokenService';
import AuthApiService from '../../Services/auth-api-service';


export default class Signup extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            password2: '',
            error: null
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
    handleRepeatPassword = (event) => {
        this.setState({
            password2: event.target.value
        })
    }

    handleNickname = (event) => {
        this.setState({
            nickname: event.target.value
        })
    }

    handleNewRegistration = (e) => {
        e.preventDefault();
        let username = this.state.username
        let password = this.state.password

        if (this.state.password !== this.state.password2){
            return alert('your two passwords do not match. Please ensure that they are identical')
        } else {
            UserFetchService.postNewUser(username, password)
            //ok so this 'res' is undefined but its posting
            .then(res => {
                //there is an error here (even though its posting)
                console.log(res)
                return (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            })
    
            .then(data => {
                this.setState({
                    username: '',
                    password: ''
                })
                console.log(data)
            }) 
        }
    }
        
    render(){
        return(
            <>
                <body>
                    <h1 className="signup_title">Signup!</h1>
                    <form className="signup-form" onSubmit={this.handleNewRegistration}>
                        <label for="username">Username</label><br/>
                        <input type="text" id="username-input" name="username" value={this.state.username} onChange={this.handleUsername}/><br/>
                        
                        <label for="password">Password</label><br/>
                        <input type="text" id="password-input" name="password" value={this.state.password} onChange={this.handlePassword}/><br/> 
                        <label for="password-take2">Please Re-Enter Password</label><br/>
                        <input for="password-take-2" id="password-take-2" name="password2" value={this.state.password2} onChange={this.handleRepeatPassword} required/><br/>
                        <button>Sign me up!</button>
                    </form>
                    
                </body>
            </>
        )
    }
}