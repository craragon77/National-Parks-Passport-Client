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
            nickname: '',
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
        //let params = `?username=${this.state.username}&password=${this.state.password}&nickname=${this.state.nickname}`
        if (this.state.password !== this.state.password2){
            return alert('your two passwords do not match. Please ensure that they are identical')
        } else {
            fetch('http://localhost:8000/api/users' , {
            method: 'POST',
            headers: {
               'Content-Type': 'Application/JSON'
            },
            body: JSON.stringify({
                'username': this.state.username,
                'password': this.state.password,
                'nickname': this.state.nickname
            })
            })
                .then(res => {
                    console.log(res)
                    if (res.status == 201){
                        return res.json()
                    } else{
                        return console.log('the else has activated')
                    }
                })
                .then(resJson => console.log(resJson))
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
                        <input type="text" id="username-input" name="username" value={this.state.username} onChange={this.handleUsername}/><br/>
                        <label for="nickname">Nickname</label><br/>
                        <input type="text" id="nickname-input" name="nickname" value={this.state.nickname} onChange={this.handleNickname}/><br/>
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