import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import StampFetchService from '../../Services/StampbookFetchService';

export default class Stamp extends Component {
    constructor(props){
        super(props)
        this.state = {
            stamp: []
        }
    }

    componentDidMount(){
        //how can I get the stamp's id to use as a param?
        let stampId = window.location.pathname.split("/")[2]
        StampFetchService.fetchStampInfo(stampId)
            .then(res => {
                if(res.ok){
                    return res.json()
                }
            })
            .then(resJson => {
                console.log(resJson)
                this.setState({
                    stamp: resJson[0]
                })
                console.log(this.state.stamp)
            })
            .catch(error => {console.log(error)})      
    }
    render(){
        return(
            <>
                <body>
                    <p>{this.state.stamp.fullname}</p>
                </body>
                <Link to='/StampList'>Return to Stamp List</Link>
            </>
        )
    }
}