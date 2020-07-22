import React, {Component} from 'react';
import {Link} from 'react-router-dom'

export default class Stamp extends Component {
    render(){
        console.log(this.props.stamps)
        return(
            <>
                <body>
                    <p>{this.props.fullname}</p>
                </body>
                <Link to='/StampList'>Return to Stamp List</Link>
            </>
        )
    }
}