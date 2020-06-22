import React, {Component} from 'react';

export default class AddStamp extends Component{
    render() {
        return (
            <>
                <header>
                    Nav Bar
                </header>
                <body>
                    <h1>Stamp a new park</h1>
                    <main>
                        <form>
                            <label htmlFor="name">Park Name</label><br/>
                            <input type="text" name="Park-Name" /><br/>
                            <label htmlFor="date">Date of Attendence</label><br/>
                            <input type="date" name="Attendence-Name" /><br/>
                            <label htmlFor="comments">Comments</label><br/>
                            <input type="text" name="Comments" /><br/>
                        </form>
                    </main>
                </body>
                <footer>
                    <p>Chris Aragon Footer 2020</p>
                </footer>
            </>
        )
    }
}