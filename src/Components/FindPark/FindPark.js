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
            this.setState({
                parks: resJson,
                searched: true
            })
        })
        .catch(error => console.error(error))
    }

    handleNoResultsFound = () => {
        if (this.state.searched == true && this.state.parks.length === 0){
            return (<p id="nothing-found">Unfortunatly no results were found based on your input.
                 Try tweaking your search request and try again</p>)
        }
    }

    render(){
        const mappingParks = this.state.parks.map(i => {
            return <SearchResult fullname = {i.fullname} id = {i.id}/>
        })
        const parkResults = this.state.searched
            ? <p id="find-a-park-results">{this.state.parks.length} park(s) were found matching your search</p>
            : null
                
        return(
            <>
                <form onSubmit={this.usingTheFetchService}>
                    <label id="label" htmlFor="park_search">Enter the name of any park, monument, or historic site in the United States</label><br/>
                    <input type="text" name="fullname" value={this.state.fullname} onChange={this.dealWithFullName} required /><br/>
                    <button id="search-parks">Submit!</button>
                </form>
                <hr/>
                    {parkResults}
                    {mappingParks}
                
                {this.handleNoResultsFound()}
            </>
        )
    }
}
