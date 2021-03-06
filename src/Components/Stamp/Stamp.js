import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import StampFetchService from '../../Services/StampbookFetchService';
import NoPageFound from '../NoPageFound/NoPageFound';
import park_service from '../../pics/park_service.jpg';
import './Stamp.css';


export default class Stamp extends Component {
    constructor(props){
        super(props);
        this.state = {
            stamp: []
        };
    };

    componentDidMount(){
        let stampId = window.location.pathname.split("/")[2];
        StampFetchService.fetchStampInfo(stampId)
            .then(res => {
                if(res.ok){
                    return res.json();
                };
            })
            .then(resJson => {
                this.setState({
                    stamp: resJson[0]
                });
            })
            .catch(error => {console.error(error)});
    };

    handleStampDelete = (e) => {
        let stampId = window.location.pathname.split("/")[2];
        StampFetchService.deleteStamp(stampId)
            .then(res => {
                if(res.ok){
                    alert(`you have successfully deleted ${this.state.stamp.fullname} from your stampbook! You will be redirected back to the stampbook page!`);
                };
            })
            .then(() => {
                this.props.history.push('/Stampbook');
            })
            .catch(error => {
                console.error(error);
            })
    };

    handleNullImage = () => {
        if (!this.state.stamp.image || this.state.stamp.image === 'null'){
            return <img id="stamp-photo" src={park_service} alt="National Parks Picture"/>
        } else {
            return <img id="stamp-photo" src={this.state.stamp.image} alt="National Parks Picture" />
        }
    };

    handleNoStampFound = () => {
        if (this.state.stamp == null){
            return <NoPageFound />;
        } else {

            return (
            <main id="stamp-body">
                <h1>{this.state.stamp.fullname}</h1>
                {this.handleNullImage()}
                <div>
                    {/*<p>Date Visited: {this.state.stamp.stamp_date}</p>*/}
                    <p>State: {this.state.stamp.states}</p>
                    <p>Park Code: {this.state.stamp.parkcode}</p>
                    <p>To learn more information, check out {this.state.stamp.fullname}'s page on the National Park Service's website <a target='_blank' samesite='None' href={`https://www.nps.gov/${this.state.stamp.parkcode}/index.htm`}>here</a>!</p>
                </div>
                <button id='delete-button' onClick={this.handleStampDelete}>Delete Stamp from Passport</button><br/>
                <div>
                    <Link to='/Stampbook'>Return to Stamp List</Link>
                </div>
                
            </main>
                
            );
        };
    };


    render(){
        return(
            <>
            {this.handleNoStampFound()}
            </>
        )
    }
};