import React, {Component} from 'react';

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
                            <li>List 1</li>
                            <li>List 2</li>
                            <li>List 3</li>
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