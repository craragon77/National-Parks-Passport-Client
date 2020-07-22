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
            stamps: [],
            park_names: []
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
    fetchPark = (id) => {
        ParkFetchService.getParkById(id)
            .then(res => {
                if (res.ok){
                    //console.log(res)
                    //ok so i am getting a 401 unauthorized res here and idk why?
                    return res.json()
                }
            })
            .then(resJson => {
                console.log(resJson.fullname)
                //how can I take this mapped over resJson.fullname and make all the necessary list items or whatever?
            return <p>{resJson.fullname}</p>
            })
            .catch((error) => {
                console.log(console.log(error))
            })
            
    }
    

    render() {
        console.log(this.state.stamps)
        const stampArray = this.state.stamps.map(i => {
            this.fetchPark(i.park_id)
            /*ParkFetchService.getParkById(i.park_id)
            .then(res => {
                if (res.ok){
                    //ok so i am getting a 401 unauthorized res here and idk why?
                    return res.json()
                }
            })
            .then(resJson => {
                console.log(resJson.fullname)
                //how can I take this mapped over resJson.fullname and make all the necessary list items or whatever?
                return <p>{resJson.fullname}</p>
            })
            .catch((error) => {
                 console.log(console.log(error))
            }) */

        })
        return(
            <>
                <body>
                    <h1 className='Your-Stamps-Title'>Your Stamps!</h1>
                    <main>
                        <ul>
                        {stampArray}
                        </ul>
                    </main>
                    <Link to='/addStamp'>Add a new stamp</Link><br/>
                    <Link to='/Dashboard'>Return to Dashboard</Link><br/>
                    
                </body>
            </>
        )
    }
}