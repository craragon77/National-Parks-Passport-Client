import React, {Component} from 'react'
import StampList from '../StampList/StampList'
import BucketList from'../BucketList/BucketList'
import {Route, Link} from 'react-router-dom'
import './Dashboard.css'


export default class Dashboard extends Component{
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
                        <h2>You have {this.props.Bucket_Dummy.length} National Parks on your Bucket List</h2>
                        <Link to={'/Bucketlist'}>
                            View Your BucketList
                        </Link>
                    </main>
                </body>
            </>
        )
    }
}