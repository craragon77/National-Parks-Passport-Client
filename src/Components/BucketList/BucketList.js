import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './BucketList.css';
import BucketlistServices from '../../Services/BucketlistFetchService';
import Bucketlist_Item from '../BucketList_Item/Bucketlist_Item';

export default class Bucketlist extends Component {
    constructor(props){
        super(props);
        this.state = {
            bucketlist: []
        }
    }

    componentDidMount(){
        let id = window.localStorage.token_id
        this.loadBucketlistIntoState(id)
    }

    loadBucketlistIntoState = (id) => {
        BucketlistServices.getBucketlistAndParkName(id)
        .then(res => {
            if (res.ok){
                return res.json()
            }
        })
        .then(resJson => {
            this.setState({
                bucketlist: resJson
            })
            console.log(this.state.bucketlist)
        })
        .catch(err => {
            console.log(err)
        })
    }

    handleDelete = (bucketlist_id) => {
        let user_id = window.localStorage.token_id
        BucketlistServices.deleteBucketlistItem(bucketlist_id)
        .then(res => {
            if(res.ok){
                alert(`you have successfully deleted ${this.state.bucketlist.fullname} from your bucket list!`)
            }
        })
        .then(() => {
            this.loadBucketlistIntoState(user_id)
        })
        .catch(error => {
            console.log(error)
        })
    }


    render(){
        const bucketlistArray = this.state.bucketlist.map(i => {
            return(
                <li id="bucket" key={i.bucketlist_id}>
                    <p>{i.fullname}</p>
                    <button onClick={() =>this.handleDelete(i.bucketlist_id)}>Remove from Bucket List</button>
                </li>
            )
        })
        return(
            <>
                <div className = "BucketList">
                    <h1 className="Bucketlist-Title">Your Bucket List</h1>
                    <main>
                        {bucketlistArray}
                        <Link to={'/Dashboard'}>Back to dashboard</Link>
                    </main>
                </div>
            </>
        )
    }
}