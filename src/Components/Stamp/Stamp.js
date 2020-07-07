import React, {Component} from 'react';
import {Link} from 'react-router-dom'

export default class Stamp extends Component {
    render(){
        console.log(this.props.Stamp_Dummy)
        console.log(this.props.match.params.id)
        return(
            <>
                <body>
                    <h1>{this.props.Stamp_Dummy[this.props.match.params.id-1].fullname}</h1><br/>
                    <h3>Date Stamped: {this.props.Stamp_Dummy[this.props.match.params.id-1].Date}</h3><br/>
                    <label for="comments">comments</label><br/>
                    <p>{this.props.Stamp_Dummy[this.props.match.params.id-1].comment}</p>
                </body>
                <Link to='/StampList'>Return to Stamp List</Link>
            </>
        )
    }
}