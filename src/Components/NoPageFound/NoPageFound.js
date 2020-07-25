import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class NoPageFound extends Component{
    render(){
        return(
            <>
                <h1>Uh-Oh! You seem to be a bit lost!</h1><br/>
                <h3>The page you are lookin for canont be found!<br/>Click <Link to={'/'}>here!</Link> to return to the home page!</h3>
            </>
        )
    }
}