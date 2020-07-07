import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Signup.css'

export default class Signup extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            password2: '',
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
    handleRegistration = (e) => {
        e.preventDefault();
        console.log([this.state.username, this.state.password, this.state.password2])
        if (this.state.password !== this.state.password2){
            return alert('your two passwords do not match. Please ensure that they are identical')
        } else {
            fetch('https://tranquil-wildwood-36569.herokuapp.com/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/JSON'
            }
            })
                .then(res => {
                    if (res.ok){
                        res.json()
                    }
                })
                .then(res => console.log(res))
                .catch(error => 'There was an error!')
            }
        }
        
    render(){
        return(
            <>
                <body>
                    <h1 className="signup_title">Signup!</h1>
                    <form className="signup-form" onSubmit={this.handleRegistration}>
                        <label for="username">Username</label><br/>
                        <input type="test" id="username-input" name="username" value={this.state.username} onChange={this.handleUsername}/><br/>
                        <label for="password">Password</label><br/>
                        <input type="text" id="password-input" name="password" value={this.state.password} onChange={this.handlePassword}/><br/> 
                        <label for="password-take2">Please Re-Enter Password</label><br/>
                        <input for="password-take-2" id="password-take-2" name="password2" value={this.state.password2} onChange={this.handleRepeatPassword}/><br/>
                        <button>Sign me up!</button>
                    </form>
                    
                </body>
            </>
        )
    }
}