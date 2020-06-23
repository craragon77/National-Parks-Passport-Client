import React, {Component} from 'react'
import StampList from '../StampList/StampList'
import BucketList from'../BucketList/BucketList'
import {Route, Link} from 'react-router-dom'


export default class Dashboard extends Component{
    render(){
        return(
            <>
                <header>
                    Nav Bar
                </header>
                <body>
                    <section>
                        <div>
                            <h1>Welcome {this.props.name}</h1>
                        </div>
                    </section>
                    <main>
                        <h2>You have {this.props.Stamp_Dummy.length} National Park Stamps</h2><br/>
                        <h2>You have {this.props.Bucket_Dummy.length} National Parks on your Bucket List</h2>
                        <Link to={'/StampList'}>
                            View Your Stamps
                        </Link>
                        <Link to={'/Bucketlist'}>
                            View Your BucketList
                        </Link>
                    </main>
                </body>
                <footer>
                    <p>Chris Aragon Footer 2020</p>
                </footer>
            </>
        )
    }
}