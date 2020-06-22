import React, {Component} from 'react'

export default class AddBucketList extends Component {
    render(){
        return(
            <>
                <header>
                    Nav Bar
                </header>
                <body>
                    <h1>Add to your Bucket List</h1>
                    <main>
                        <form>
                            <label for="name">Park Name</label><br/>
                            <input type="text" name="Park-Name"/><br/>
                        </form>
                    </main>
                </body>
                <footer>
                    <p>Chris Aragon Footer baby!</p>
                </footer>
            </>
        )
    }
}