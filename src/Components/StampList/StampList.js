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

    /*fetchPark = (id) => {
        ParkFetchService.getParkById(id)
            .then(res => {
                if (res.ok){
                    //console.log(res)
                    //ok so i am getting a 401 unauthorized res here and idk why?
                    return res.json()
                }
            })
            .then(resJson => {
                console.log(resJson)
                //how can I take this mapped over resJson.fullname and make all the necessary list items or whatever?
                let storedValue = {resJson}
                console.log(storedValue)
            })
            .catch((error) => {
                console.log(console.log(error))
            })
            
    } */
    

    render() {
        console.log(this.state.stamps)
        const stampArray = this.state.stamps.map(i => {
            return(
            <li key={i.stamp_id}>
                <Link to={`/Stamp/${i.stamp_id}`}>
                    <p>{i.fullname}</p>
                </Link>
            </li>
            )
        })
        return(
            <>
                <body>
                    <h1 className='Your-Stamps-Title'>Your Stamps!</h1>
                    <main>
                        <ul>
                            {stampArray}
                            {this.handleNoStamps()}
                        </ul>
                        
                    </main>
                    <Link to='/addStamp'>Add a new stamp</Link><br/>
                    <Link to='/Dashboard'>Return to Dashboard</Link><br/>
                    
                </body>
            </>
        )
    }
}