import React, {Component} from 'react';
import BucketlistFetchService from '../../Services/BucketlistFetchService'

export default class BucketlistButton extends Component {
    addBucketlist = (e) => {
        BucketlistFetchService.postNewBucketlist(this.props.fullname, this.props.id)
        .then(res => {
            if (res.ok){
                alert(`The destination ${this.props.fullname} has been added to your bucketlist!`)
                return res.json
            }
        })
        .catch((error) => {
            alert(`Unfortunatly something went wrong! This park was unable to be added to your bucketlist`)
            console.log(error)
        })
    }
    render(){
        return(
            <button onClick = {this.addBucketlist}>Add to Bucketlist!</button>
        )
    }
}