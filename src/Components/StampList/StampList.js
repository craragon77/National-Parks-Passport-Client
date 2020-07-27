import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './StampList.css';
import StampFetchService from '../../Services/StampbookFetchService';

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
                this.setState({
                    stamps: resJson
                })
            })
            .catch(error => {console.error(error)})
        
    }

    handleNoStamps = () => {
        if (this.state.stamps.length == 0){
            return <div>
                    <p>You currently have no stamps in your stamp book!<br/><Link to={'/FindAPark'}>Click here </Link> to get stamping!</p>
                    
                </div>
        }
    }

    render() {
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
                        <Link to='/FindAPark'>Add a New Stamp</Link><br/>
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