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
    

    handleRegistration = (e) => {
        e.preventDefault();
        console.log([this.state.username, this.state.password, this.state.password2, this.state.nickname])
        let username = this.state.username
        let password = this.state.password
        
        TokenService.saveAuthToken(
            TokenService.makeBasicAuthToken(username, password)
        )
        //let params = `?username=${this.state.username}&password=${this.state.password}&nickname=${this.state.nickname}`
        if (this.state.password !== this.state.password2){
            return alert('your two passwords do not match. Please ensure that they are identical')
        } else {
            AuthApiService.postUser(username, password)
            .then(user => {
                this.setState({
                    username: '',
                    password: ''
                })
            })
            .catch(err => {
                this.setState({error: err.error})
            })
            /*fetch(`${AuthApiService.postUser}` , {
            method: 'POST',
            headers: {
               'Content-Type': 'Application/JSON',
               'authorization': `basic ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify({
                //is it passing successfully because the sate is the variable here?
                'username': this.state.username,
                'password': this.state.password,
                
            })
            })
                .then(res => {
                    console.log(res)
                    console.log(res.status)
                    if (res.ok){
                        return res.json()
                    } else{
                        throw 'the else has activated'
                    }
                })
                
                .catch(error => 'There was an error!') 
                //UserFetchService.postNewUser(username, password, nickname)
            }  */
            
        }}
        
    render(){
        return(
            <>
                <body>
                    <h1 className="signup_title">Signup!</h1>
                    <form className="signup-form" onSubmit={this.handleRegistration}>
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