import React, {Component} from 'react';
import TokenService from '../../Services/TokenService';
import { Link} from 'react-router-dom';
import './Header.css';
import '../Buttons/Hamburger.scss';

export default class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            hasAuthToken: TokenService.hasAuthToken()
        };
    }
    
    componentDidMount(){
        window.onstorage = () => {
            this.setState({hasAuthToken: TokenService.hasAuthToken()});   
        };
    }
    
    handleLogOutClick = () => {
        TokenService.clearAuthToken();
        this.setState({
            hasAuthToken: TokenService.hasAuthToken()
        })
    }
    renderLogOutLink = () => {
        return(
            <li><Link to='/' onClick={this.handleLogOutClick}>Sign out</Link></li>
        )
    }
    renderLoginLink = () => {
        return(
            <>
                <li id="login-nav"><Link to={'/Login'}>Login</Link></li><br/>
                <li id="signup-nav"><Link to={'/Sign up'}>Sign up</Link></li>
            </>
            
        )
    }

    render(){
        return(
            <>
                <div className="header-bar">
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/Dashboard'>Dashboard</Link></li>
                        <li><Link to='/Stampbook'>Your Stampbook</Link></li>
                        <li><Link to='/BucketList'>Your Bucket List</Link></li>
                        <li><Link to='/FindAPark'>Find Parks</Link></li>
                        {this.state.hasAuthToken 
                        ?  this.renderLogOutLink()
                        : this.renderLoginLink()}
                    </ul>
                </div>
            </>
        )
    }
};