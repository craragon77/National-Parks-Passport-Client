import React, {Component} from 'react'

export default class FetchData extends Component {
    fetchStates = () => {
        let StateCode = 'AL'
        fetch(`https://developer.nps.gov/api/v1/parkshttps://developer.nps.gov/api/v1/parks?api_key=tg3iuJhu0fNZp8JDNiNbcSO6M8xOQPvVkRVYmqDU&stateCode=${StateCode}`)
        .then(res => {
            if(res.ok){
                return res.json()
            }
        })
        .then(response => {
            console.log(response)
        })
        .catch(alert('you have fucked up somehow'))
    }
    render(){
        return(
            <button onClick={this.fetchStates()}>
                Click to get States!
            </button>
        )
    }
}