import React, {Component} from 'react';
import BucketlistFetchService from '../../Services/BucketlistFetchService'

export default class BucketlistButton extends Component {
    addBucketlist = (e) => {
        BucketlistFetchService.postNewBucketlist(this.props.fullname, this.props.id)
        .then(res => {
            if (res.status == 201){
                console.log('user successfully posted!')
                return res.json()
            }
        })
        .then(alert(`The destination ${this.props.fullname} has been added to your bucketlist!`))
        .catch(() => {
            console.log('something went bump in the night with the postNewBucketlist endpoint')
        })
    }
    render(){
        return(
            <button onClick = {this.addBucketlist}>Add to Bucketlist!</button>
        )
    }
}