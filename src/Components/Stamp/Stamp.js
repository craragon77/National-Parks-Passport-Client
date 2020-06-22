import React, {Component} from 'react';

export default class Stamp extends Component {
    render(){
        return(
            <>
                <header>
                    Nav Bar
                </header>
                <body>
                    <h1>Parkname</h1><br/>
                    <h3>Date Stamped: Date!</h3><br/>
                    <label for="comments">comments</label><br/>
                    <p>This is a comment about my park experience!</p>
                </body>
                <footer>
                    <p>Chris Aragon Footer baby!</p>
                </footer>
            </>
        )
    }
}