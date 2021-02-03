import React, {Component} from 'react';
import StampList from '../StampList/StampList';
import BucketList from'../BucketList/BucketList';
import {Route, Link} from 'react-router-dom';
import UserFetchService from '../../Services/UserFetchService';
import StampbookFetchService from '../../Services/StampbookFetchService';
import BucketlistFetchService from '../../Services/BucketlistFetchService';
import config from '../../config';
import './Dashboard.css';


export default class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state =  {
            username: '',
            stamps: '',
            bucketlist: ''
        };
    }
    componentDidMount(){
        let id = window.localStorage.token_id
        UserFetchService.getUserById(id)
            .then(res => {
                if (res.ok){
                    return res.json();
                };
            })
            .then(resJson => {
                this.setState({
                    username: resJson.username
                });
            })
            .catch(error => {
                console.error(error);
            })

        StampbookFetchService.fetchUserStamp(id)
            .then(res => {
                if (res.ok){
                    return res.json();
                };
            })
            .then(resJson => {
                this.setState({
                    stamps: resJson.length
                });
            })
            .catch(error => {
                console.error(error);
            })

        BucketlistFetchService.getBucketlistUser(id)
            .then(res => {
                if (res.ok){
                    return res.json();
                };
            })
            .then(resJson => {
                this.setState({
                    bucketlist: resJson.length
                });
            })
            .catch(err => {
                console.error(err);
            })
    }
    render(){
        return(
            <>
            <main>
                <section>
                    <div>
                        <h1 className="welcome-title">Welcome {this.state.username}</h1>
                        <Link to={'/FindAPark'}>Find a park!</Link>
                    </div>
                </section>
                <div className='Dashboard'>
                    <div id="stampbook-side">
                        <h2>You have {this.state.stamps} Stamps in your National Parks Passport</h2><br/>
                        <Link to={'/Stampbook'}>
                            View Your Stampbook
                        </Link><br/>
                    </div>
                    <div id="bucketlist-side">
                        <h2>You have {this.state.bucketlist} National Parks on your Bucket List</h2><br/>
                        <Link to={'/Bucketlist'}>
                            View Your Bucket List
                        </Link><br/>
                    </div>
                </div>
            </main>
                
            </>
        )
    }
};