import React, {Component} from 'react';
import ParkFetchService from '../../Services/ParkFetchService';

export default class FindPark extends Component{
    constructor(props){
        super(props)
        this.state = {
            fullname: ''
        }
    }

    dealWithFullName = (e) => {
        this.setState({
            fullname: e.target.value
        })
    }

    fetchTheParkByName = (e) => {
        e.preventDefault()
        let params = this.state.fullname
        fetch(`http://localhost:8000/api/parks/name/` + params)
        .then(res => {
            if (res.ok){
                return res.json()
            }
        })
        .then(resJson => {
            console.log(resJson)
        })
        .catch(error => {
            console.alert('the catch activated')
        })
    }

    usingTheFetchService = (e) => {
        e.preventDefault()
        let params = this.state.fullname
        //idk if the TokenService thing should go here? it comes back as undefined according to the console :(
        //TokenService.saveAuthToken(
          //  TokenService.makeBasicAuthToken(username, password)
        //)
        ParkFetchService.getParkByFullName(params)
    }

    render(){
        return(
            <>
                <form onSubmit={this.usingTheFetchService}>
                    <label for="park_search">Enter the name of any park in the United States</label>
                    <input type="text" name="fullname" value={this.state.fullname} onChange={this.dealWithFullName} required></input>
                    <button>Submit!</button>
                </form>
            </>
        )
    }
}
