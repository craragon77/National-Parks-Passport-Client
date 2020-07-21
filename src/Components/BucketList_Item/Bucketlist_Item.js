import React, {Component} from 'react';
import BucketlistFetchService from '../../Services/BucketlistFetchService';


export default class Bucketliist_Item extends Component{
    render(){
        return(
            <>
                <div>
                    <p>{this.props.fullname}</p>
                    <button>Click to delete from Bucketlist!</button>
                </div>
            </>
        )
    }
}