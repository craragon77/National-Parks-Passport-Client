import React, {Component} from 'react';
import {Link} from 'react-router-dom'

export default class Stamp extends Component {
    render(){
        console.log(this.props.Stamp_Dummy)
        return(
            <>
                <header>
                    Nav Bar
                </header>
                <body>
                    <h1>{this.props.Stamp_Dummy.fullName}</h1><br/>
                    <h3>Date Stamped: {this.props.Stamp_Dummy.Date}</h3><br/>
                    <label for="comments">comments</label><br/>
                    <p>{this.props.Stamp_Dummy.comment}</p>
                </body>
                <Link to='/StampList'>Return to Your Stamps</Link>
                <footer>
                    <p>Chris Aragon Footer baby!</p>
                </footer>
            </>
        )
    }
}