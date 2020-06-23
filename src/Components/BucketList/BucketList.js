import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './BucketList.css';

export default class Bucketlist extends Component {
    render(){
        return(
            <>
                <body>
                    <h1 className="Bucketlist-Title">Your BucketList</h1>
                    <main>
                        <ul>
                            {this.props.Bucket.map((bucket) => {
                                return(
                                    <li>
                                    {bucket.parkName}
                                    </li>
                                )
                                
                            })}
                        </ul>
                        <Link to={'/AddBucketList'}>Add to your bucket list</Link><br/>
                        <Link to={'/Dashboard'}>Back to dashboard</Link>
                    </main>
                </body>
            </>
        )
    }
}