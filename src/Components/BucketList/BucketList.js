import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './BucketList.css';
import BucketlistServices from '../../Services/BucketlistFetchService';
import Bucketlist_Item from '../BucketList_Item/Bucketlist_Item';

export default class Bucketlist extends Component {
    constructor(props){
        super(props);
        this.state = {
            bucketlist: ''
        }
    }

    componentDidMount(){
        let id = window.localStorage.token_id
        BucketlistServices.getBucketlistUser(id)
            .then(res => {
                if (res.ok){
                    return res.json()
                }
            })
            .then(resJson => {
                console.log(resJson)
                this.setState({
                    bucketlist: resJson
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
    render(){
        const bItem = this.state.bucketlist
        console.log(bItem)
        return(
            <>
                <body>
                    <h1 className="Bucketlist-Title">Your Bucket List</h1>
                    <main>
                        
                        <Link to={'/Dashboard'}>Back to dashboard</Link>
                    </main>
                </body>
            </>
        )
    }
}