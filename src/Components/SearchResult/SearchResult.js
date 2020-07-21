import React, {Component} from 'react';
import StampButton from '../Buttons/Stamp-Button';
import BucketlistButton from '../Buttons/Bucketlist-Button';

export default class SearchResult extends Component {
    render(){
        return(
            <>
            <div key={this.props.id}>
                <p>{this.props.fullname}</p>
                <StampButton fullname={this.props.fullname} id={this.props.id}/>
                <BucketlistButton fullname={this.props.fullname} id={this.props.id}/>
            </div>
                
            </>
            
        )
    }
}