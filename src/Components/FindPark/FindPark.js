import React, {Component} from 'react';
import ParkFetchService from '../../Services/ParkFetchService';
import SearchResult from '../SearchResult/SearchResult';

export default class FindPark extends Component{
    constructor(props){
        super(props)
        this.state = {
            fullname: '',
            searched: false,
            parks: []
        }
    }

    dealWithFullName = (e) => {
        this.setState({
            fullname: e.target.value
        })
    }

    usingTheFetchService = (e) => {
        e.preventDefault()
        let params = this.state.fullname
        ParkFetchService.getParkByFullName(params)
        .then(res => {
            if (res.ok){
                return res.json()
            }
        })
        .then(resJson => {
            //ok so we know this works and it shows succesfully
            //console.log(parks)
            this.setState({
                parks: resJson
            })
            //if you console.log the state, it shows you all the parks or whatever
            console.log(this.state.parks)
        })
        .catch(error => console.log(error))
    }

    render(){
        const mappingTest = this.state.parks.map(i => {
            //console.log(i.fullname + " " +  i.id)
            return <SearchResult fullname = {i.fullname} id = {i.id}/>
        })
        //but this only shows the top of the ternary. If/else doesn't work
        const parkResults = this.state.parks
            ? <p>Nothing to show yet!</p>
            //how the beans to you map over the component?
            : <p>wow so much to show!</p>
        return(
            <>
                <form onSubmit={this.usingTheFetchService}>
                    <label for="park_search">Enter the name of any park, monument, or historic site in the United States</label>
                    <input type="text" name="fullname" value={this.state.fullname} onChange={this.dealWithFullName} required></input>
                    <button>Submit!</button>
                </form>
                {parkResults}
                {mappingTest}
            </>
        )
    }
}
