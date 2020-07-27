import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './BucketList.css';
import BucketlistServices from '../../Services/BucketlistFetchService';

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
        })
        .catch(err => {
            console.error(err)
        })
    }

    handleDelete = (bucketlist_id) => {
        let user_id = window.localStorage.token_id
        BucketlistServices.deleteBucketlistItem(bucketlist_id)
        .then(res => {
            if(res.ok){
                alert(`The park has been deleted successfully!`)
            }
        })
        .then(() => {
            this.loadBucketlistIntoState(user_id)
        })
        .catch(error => {
            console.error(error)
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
                        <Link to={'/Dashboard'}>Back to Dashboard</Link>
                    </main>
                </div>
            </>
        )
    }
}