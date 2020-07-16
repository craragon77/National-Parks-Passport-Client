import React, {Component} from 'react'
import StampList from '../StampList/StampList'
import BucketList from'../BucketList/BucketList'
import {Route, Link} from 'react-router-dom'
import UserFetchService from '../../Services/UserFetchService';
import StampbookFetchService from '../../Services/StampbookFetchService'
import './Dashboard.css'


export default class Dashboard extends Component{
    componentDidMount(){
        // needs to make a fetch request to ALL THREE ENDPOINTS; one for users, one to stampbook, and one to bucketlist
        UserFetchService.getUserById()
            .then(res => {
                if (res.ok){
                    return res.json()
                }
            })
            .then(resJson => {
                console.log(resJson)
            })
            .catch(() => {
                console.log(`aaaaaaaahhhhhh somethings wrong with the getUserById endpoint`)
            })
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
                            View Your Stamps
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