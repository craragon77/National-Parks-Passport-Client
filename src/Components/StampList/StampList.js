import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Stamp from '../Stamp/Stamp';
import './StampList.css';
import StampFetchService from '../../Services/StampbookFetchService';
import ParkFetchService from '../../Services/ParkFetchService';

export default class StampList extends Component {
    constructor(props){
        super(props)
        this.state = {
            stamps: []
        }
    }

    componentDidMount(){
        let id = window.localStorage.token_id
        StampFetchService.fetchStampAndNames(id)
            .then(res => {
                if(res.ok){
                    return res.json()
                }
            })
            .then(resJson => {
                console.log(resJson)
                this.setState({
                    stamps: resJson
                })
            })
            .catch(error => {console.log(error)})
        
    }

    handleNoStamps = () => {
        if (this.state.stamps.length == 0){
            return <div>
                    <p>You currently have no stamps in your stamp book!<br/><Link to={'/FindAPark'}>Click here </Link> to get stamping!</p>
                    
                </div>
        }
    }

    render() {
        console.log(this.state.stamps)
        const stampArray = this.state.stamps.map(i => {
            return(
            <li id='stamps' key={i.stamp_id}>
                <Link to={`/Stamp/${i.stamp_id}`}>
                    <p>{i.fullname}</p>
                </Link>
            </li>
            )
        })
        return(
            <>
                <main>
                    <h1 className='Your-Stamps-Title'>Your Stamps!</h1>
                    <div>
                        <Link to='/addStamp'>Add a New Stamp</Link><br/>
                        <ul>
                            {stampArray}
                            {this.handleNoStamps()}
                        </ul>
                        
                    </div>
                        <Link to='/Dashboard'>Return to Dashboard</Link><br/>
                    
                    
                </main>
            </>
        )
    }
}