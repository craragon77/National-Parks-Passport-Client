import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class StampList extends Component {
    render() {
        return(
            <>
                <header>
                    Nav Bar
                </header>
                <body>
                    <h1>Your Stamps!</h1>
                    <main>
                        <ul>
                        {this.props.Stamp.map((stamp) => {
                            return(
                            <li key={stamp.id}>
                                <Link to={`/Stamp/${stamp.id}`}>
                                    {stamp.fullName}
                                </Link>
                            </li>)
                        })
                    }
                        </ul>
                    </main>
                </body>
                <footer>
                    <p>Chris Aragon Footer baby!</p>
                </footer>
            </>
        )
    }
}