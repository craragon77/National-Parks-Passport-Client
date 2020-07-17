import React, {Component} from 'react';
import StampButton from '../Buttons/Stamp-Button';
import BucketlistButton from '../Buttons/Bucketlist-Button';

export default class SearchResult extends Component {
    render(){
        return(
            <>
                <p>Park full name will go here</p>
                <StampButton />
                <BucketlistButton />
            </>
            
        )
    }
}