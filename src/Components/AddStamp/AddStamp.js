import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './AddStamp.css'

export default class AddStamp extends Component{
    render() {
        return (
            <>
                <body>
                    <h1 className='AddStamp-Title'>Stamp a new park</h1>
                    <main>
                        <form className='AddStamp-Form'>
                            <label htmlFor="name">Park Name</label><br/>
                            <input type="text" name="Park-Name" /><br/>
                            <label htmlFor="date">Date of Attendence</label><br/>
                            <input type="date" name="Attendence-Name" /><br/>
                            <label htmlFor="comments">Comments</label><br/>
                            <input type="text" name="Comments" /><br/>
                        </form>
                    </main>
                    <Link to={'/StampList'}>Stamp This Park</Link>
                </body>
            </>
        )
    }
}