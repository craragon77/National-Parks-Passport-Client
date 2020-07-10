import React, {Component} from 'react';
import TokenService from '../../Services/TokenService';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import { Link } from 'react-router-dom';

export default class Header extends Component{
    handleLogOutClick = () => {
        //some code will eventually go in here to remove the cookie or whatever form the client
    }
    renderLogOutLink = () => {
        console.log('logout has executed')
        return(
            <li><Link to='/'>Signout</Link></li>
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
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                    <li><Link to='/StampList'>Stamps List</Link></li>
                    <li><Link to='/BucketList'>Bucket List</Link></li>
                    {TokenService.hasAuthToken() 
                    ?  this.renderLogOutLink()
                    : this.renderLoginLink()}
                </ul>
                </header>
            </>
        )
    }
}