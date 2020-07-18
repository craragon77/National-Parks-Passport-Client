import React, {Component} from 'react'
import StampList from '../StampList/StampList'
import BucketList from'../BucketList/BucketList'
import {Route, Link} from 'react-router-dom'
import UserFetchService from '../../Services/UserFetchService';
import StampbookFetchService from '../../Services/StampbookFetchService';
import config from '../../config';
import './Dashboard.css'


export default class Dashboard extends Component{
    // needs to make a fetch request to ALL THREE ENDPOINTS; one for users, one to stampbook, and one to bucketlist
    componentDidMount(){
        //ok what if I target the user_id of the payload
        //ok ok ok so lets take stock: window.localStorage.Authorization comes back as defined, but add payload and its undefined

        //then working on 
        let id = window.localStorage.token_id
        UserFetchService.getUserById(id)
            
    } 
    render(){
        return(
            <>
                <body>
                    <section>
                        <div>
                            <h1 className="welcome-title">Welcome {this.props.name}</h1>
                        </div>
                    </section>
                    <main className='Dashboard'>
                        <h2>You have {this.props.Stamp_Dummy.length} National Park Stamps</h2><br/>
                        <Link to={'/StampList'}>
                            View Your Stampbook
                        </Link><br/>
                        <Link to={'/AddStamp'}>Add a new Stamp</Link><br/>
                        <h2>You have {this.props.Bucket_Dummy.length} National Parks on your Bucket List</h2>
                        <Link to={'/Bucketlist'}>
                            View Your BucketList
                        </Link><br/>
                        <Link to={'/AddBucketList'}>Add to your Bucket List</Link><br/>
                    </main>
                </body>
            </>
        )
    }
}