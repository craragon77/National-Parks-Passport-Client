import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class AddBucketList extends Component {
    render(){
        return(
            <>
                <body>
                    <h1 className='AddBucketList-Title'>Add to your Bucket List</h1>
                    <main>
                        <form className='AddBucketList-Form'>
                            <label for="name">Park Name</label><br/>
                            <input type="text" name="Park-Name"/><br/>
                        </form>
                    </main><br/>
                    <Link to={'/BucketList'}>Submit!</Link>
                </body>
            </>
        )
    }
}