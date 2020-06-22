import React, {Component} from 'react';
import {Link} from 'react-router-dom'

export default class Bucketlist extends Component {
    render(){
        return(
            <>
                <header>
                    Nav Bar
                </header>
                <body>
                    <h1>Your BucketList</h1>
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
                        <Link to={'/Dashboard'}>Back to dashboard</Link>
                    </main>
                </body>
                <footer>
                    <p>Chris Aragon Footer baby!</p>
                </footer>
            </>
        )
    }
}