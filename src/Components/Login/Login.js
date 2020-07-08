import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Login.css';

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
            password: event.target.password
        })
    }

    fetchLogin = (e) => {
        e.preventDefault()
        console.log('yeet this activated')
        let username = this.state.username
        let password = this.state.password
        console.log(username, password)
        fetch("http://localhost:8000/api/users")
        .then(res => {
            if (res.status === 200){
                return console.log(res)
            }
        })
        .then(responseJson => responseJson.filter())
        .catch((error) => {
            console.log('something went wrong')
        })
    }

    render(){
        return (
            <>
            <body>
                <h1 className="login-title">Login</h1>
                <form className="login-form" onSubmit={this.fetchLogin}>
                    <label for="username">Username</label><br/>
                    <input type="test" id="username-input" name="username" value={this.state.username} onChange={this.handleUsername} required/><br/>
                    <label for="passwor">Password</label><br/>
                    <input type="text" id="password-input" name="password" value={this.state.password} onChange={this.handlePassword} required/><br/>
                    <button>Submit!</button>
                </form>
            </body>
            </>
        )
    }
}