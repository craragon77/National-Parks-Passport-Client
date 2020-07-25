import React, {Component} from 'react';
import StampButton from '../Buttons/Stamp-Button';
import BucketlistButton from '../Buttons/Bucketlist-Button';
import './SearchResult.css'

export default class SearchResult extends Component {
    render(){
        return(
            <>
            <div id="park" key={this.props.id}>
                <p>{this.props.fullname}</p>
                <StampButton fullname={this.props.fullname} id={this.props.id}/>
                <BucketlistButton fullname={this.props.fullname} id={this.props.id}/>
            </div>
                
            </>
            
        )
    }
}