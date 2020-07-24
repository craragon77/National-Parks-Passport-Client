import React, {Component} from 'react';
import ParkFetchService from '../../Services/ParkFetchService';
import SearchResult from '../SearchResult/SearchResult';
import './FindPark.css';

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
                parks: resJson,
                searched: true
            })
            //if you console.log the state, it shows you all the parks or whatever
            console.log(this.state.parks)
        })
        .catch(error => console.log(error))
    }

    handleNoResultsFound = () => {
        if (this.state.searched == true && this.state.parks.length === 0){
            return (<p>Unfortunatly no results were found based on your input.
                 Try tweaking your search request and try again</p>)
        }
    }

    render(){
        const mappingTest = this.state.parks.map(i => {
            //console.log(i.fullname + " " +  i.id)
            return <SearchResult fullname = {i.fullname} id = {i.id}/>
        })
        //but this only shows the top of the ternary. If/else doesn't work
        const parkResults = this.state.searched
    ? <p>Here are your results based on your search!<br/>You have {this.state.parks.length} parks that match your search</p>
            //why doesn't this show up how I expect it to?
            : null
                
        return(
            <>
                <form onSubmit={this.usingTheFetchService}>
                    <label id="label" htmlfor="park_search">Enter the name of any park, monument, or historic site in the United States</label>
                    <input type="text" name="fullname" value={this.state.fullname} onChange={this.dealWithFullName} required /><br/>
                    <button id="search-parks">Submit!</button>
                </form>
                <hr/>
                {parkResults}
                {mappingTest}
                {this.handleNoResultsFound()}
            </>
        )
    }
}
