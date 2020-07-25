import React, {Component} from 'react'
import StampList from '../StampList/StampList'
import BucketList from'../BucketList/BucketList'
import {Route, Link} from 'react-router-dom'
import UserFetchService from '../../Services/UserFetchService';
import StampbookFetchService from '../../Services/StampbookFetchService';
import BucketlistFetchService from '../../Services/BucketlistFetchService';
import config from '../../config';
import './Dashboard.css'


export default class Dashboard extends Component{
    // needs to make a fetch request to ALL THREE ENDPOINTS; one for users, one to stampbook, and one to bucketlist
    constructor(props){
        super(props)
        this.state =  {
            username: '',
            stamps: '',
            bucketlist: ''
        }
    }
    componentDidMount(){
        //ok what if I target the user_id of the payload
        //ok ok ok so lets take stock: window.localStorage.Authorization comes back as defined, but add payload and its undefined

        //then working on 
        let id = window.localStorage.token_id
        UserFetchService.getUserById(id)
         //if there is ever a .then() statement here it comes back as undefined cause the computer is mad at me
            .then(res => {
                if (res.ok){
                    return res.json()
                }
            })
            .then(resJson => {
                this.setState({
                    username: resJson.username
                })
            })
            .catch(() => {
                console.log(`aaaaaaaahhhhhh somethings wrong with the getUserById endpoint`)
            })

        StampbookFetchService.fetchUserStamp(id)
            .then(res => {
                if (res.ok){
                    return res.json()
                }
            })
            .then(resJson => {
                this.setState({
                    stamps: resJson.length
                })
            })
            .catch(() => {
                console.log(`aaaaaaaahhhhhh somethings wrong with the getUserById endpoint`)
            })

        BucketlistFetchService.getBucketlistUser(id)
            .then(res => {
                if (res.ok){
                    return res.json()
                }
            })
            .then(resJson => {
                this.setState({
                    bucketlist: resJson.length
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
    render(){
        return(
            <>
            <main>
                <section>
                    <div>
                        <h1 className="welcome-title">Welcome {this.state.username}</h1>
                        <Link to={'/FindAPark'}>Find a park!</Link>
                    </div>
                </section>
                <div className='Dashboard'>
                    <h2>You have {this.state.stamps} National Park Stamps</h2><br/>
                    <Link to={'/Stampbook'}>
                        View Your Stampbook
                    </Link><br/>
                    <h2>You have {this.state.bucketlist} National Parks on your Bucket List</h2>
                    <Link to={'/Bucketlist'}>
                        View Your BucketList
                    </Link><br/>
                </div>
            </main>
                
            </>
        )
    }
}