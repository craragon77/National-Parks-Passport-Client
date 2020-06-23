import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Stamp from '../Stamp/Stamp';

export default class StampList extends Component {
    
    render() {
        console.log(this.props.Stamp)
        return(
            <>
                <header>
                    Nav Bar
                </header>
                <body>
                    <h1>Your Stamps!</h1>
                    <main>
                        <ul>
                        {this.props.Stamp_Dummy.map((stamp) => {
                            return(
                            <li key={stamp.id}>
                                <Link to={`/Stamp/${stamp.id}`}>
                                    {stamp.fullname}
                                </Link>
                            </li>)
                        })
                    }
                        </ul>
                    </main>
                    <Link to='/Dashboard'>Return to Dashboard</Link><br/>
                    <Link to='/addStamp'>Add a new stamp</Link><br/>
                </body>
                <footer>
                    <p>Chris Aragon Footer baby!</p>
                </footer>
            </>
        )
    }
}