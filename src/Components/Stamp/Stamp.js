import React, {Component} from 'react';
import {Link} from 'react-router-dom'

export default class Stamp extends Component {
    render(){
        console.log(this.props.Stamp_Dummy)
        //console.log(this.props.match.params.id)
        const testing = this.props.Stamp_Dummy.find(s => {
            return(
                s.id === this.props.match.params.id
            )
            
        })
        return(
            <>
                <header>
                    Nav Bar
                </header>
                <body>
                    <h1>{testing.fullname}</h1><br/>
                    <h3>Date Stamped: {testing.Date}</h3><br/>
                    <label for="comments">comments</label><br/>
                    <p>{testing.comment}</p>
                </body>
                <Link to='/StampList'>Return to Your Stamps</Link>
                <footer>
                    <p>Chris Aragon Footer baby!</p>
                </footer>
            </>
        )
    }
}