import React, {Component} from 'react';
import TokenService from '../../Services/TokenService';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import { Link, withRouter } from 'react-router-dom';

export default class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            hasAuthToken: true
        }
    }
    
    componentDidMount(){
        window.onstorage = () => {
            this.setState({hasAuthToken:  false })
        };
    }
    
    handleLogOutClick = () => {
        //some code will eventually go in here to remove the cookie or whatever form the client
        TokenService.clearAuthToken()
        //you should have a push or something so that you can go back to the home page when its clicked
        //this.props.history.push('/')
    }
    renderLogOutLink = () => {
        console.log('logout has executed')
        return(
            <li><Link to='/' onClick={this.handleLogOutClick}>Signout</Link></li>
        )
    }
    renderLoginLink = () => {
        console.log('login has executed')
        return(
            <>
                <li id="login-nav"><Link to={'/Login'}>Login</Link></li>
                <li id="signup-nav"><Link to={'/Signup'}>Signup</Link></li>
            </>
            
        )
    }

    render(){
        return(
            <>
                <header className="app-header">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/Dashboard'>Dashboard</Link></li>
                    <li><Link to='/Stampbook'>Your Stamps Book</Link></li>
                    <li><Link to='/BucketList'>Your Bucket List</Link></li>
                    <li><Link to='/FindAPark'>Find Parks</Link></li>
                    {TokenService.hasAuthToken() 
                    ?  this.renderLogOutLink()
                    : this.renderLoginLink()}
                </ul>
                </header>
            </>
        )
    }
}