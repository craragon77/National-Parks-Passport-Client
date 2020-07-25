import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import StampFetchService from '../../Services/StampbookFetchService';
import NoPageFound from '../NoPageFound/NoPageFound';
import park_service from '../../pics/park_service.jpg';
import './Stamp.css'

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

    handleStampDelete = (e) => {
        let stampId = window.location.pathname.split("/")[2]
        StampFetchService.deleteStamp(stampId)
            .then(res => {
                if(res.ok){
                    alert(`you have successfully deleted ${this.state.stamp.fullname} from your stampbook! You will be redirected back to the stampbook page!`)
                }
            })
            .then(() => {
                this.props.history.push('/Stampbook')
            })
            .catch(error => {
                console.log(error)
            })
    }

    handleNullImage = () => {
        if (!this.state.stamp.image || this.state.stamp.image === 'null'){
            return <img src={park_service} alt="National Parks Picture"/>
        } else {
            return <img src={this.state.stamp.image} alt="National Parks Picture" />
        }
    }

    handleNoStampFound = () => {
        if (this.state.stamp == null){
            return <NoPageFound />
        } else {
            return (
            <body>
                <h1>{this.state.stamp.fullname}</h1>
                {this.handleNullImage()}
                <div>
                    <p>Date Visited: {Date(this.state.stamp.stamp_date)}</p>
                    <p>States: {this.state.stamp.states}</p>
                    <p>Park Code: {this.state.stamp.parkcode}</p>
                    <p>To learn more information, check out {this.state.stamp.fullname}'s page on the National Park Service's website <a target='_blank' SameSite='None' href={`https://www.nps.gov/${this.state.stamp.parkcode}/index.htm`}>here</a>!</p>
                </div>
                <button onClick={this.handleStampDelete}>Delete Stamp from Passport</button>
                <Link to='/Stampbook'>Return to Stamp List</Link>
            </body>
                
            )
        }
    }


    render(){
        return(
            <>
            {this.handleNoStampFound()}
            </>
        )
    }
}