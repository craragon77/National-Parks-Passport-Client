import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Stamp from '../Stamp/Stamp';
import './StampList.css';
import StampFetchService from '../../Services/StampbookFetchService';

export default class StampList extends Component {
    constructor(props){
        super(props)
        this.state = {
            stamps: ''
        }
    }

    componentDidMount(){
        let id = window.localStorage.token_id
        StampFetchService.fetchUserStamp(id)
            .then(res => {
                if(res.ok){
                    return res.json()
                }
            })
            .then(resJson => {
                this.setState({
                    stamps: resJson
                })
            })
            .catch(error => {console.log(error)})
    }
    render() {
        console.log(this.state.stamps)
        const stampArray = this.state.stamps.map(i => {
            return <Stamp />
        })
        return(
            <>
                <body>
                    <h1 className='Your-Stamps-Title'>Your Stamps!</h1>
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
                    <Link to='/addStamp'>Add a new stamp</Link><br/>
                    <Link to='/Dashboard'>Return to Dashboard</Link><br/>
                    
                </body>
            </>
        )
    }
}