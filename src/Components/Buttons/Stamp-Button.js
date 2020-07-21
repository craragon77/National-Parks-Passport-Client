import React, {Component} from 'react';
import StampbookFetchService from '../../Services/StampbookFetchService';


export default class StampButton extends Component {
    addStamp = (e) => {
        let userId = window.localStorage.token_id
        //when the userId is included into the fetch request, the computer yells at me :(
        //where is this second header that the computer is freaking out about?
        StampbookFetchService.postNewStamp(this.props.fullname, this.props.id)
        .then(res => {
            console.log(res)
            console.log(res.status == 201)
            if (res.ok){
                return res.json()
                .then(res => {
                    console.log('good golly miss molly! the second .then statement has executed!')
                })
            } else{
                throw 'the else has activated'
            }
        })
        .then(alert(`you have stamped ${this.props.fullname}, and it has successfully been added to your passport`))
        .catch(error => 'There was an error!')
    }
    render(){
        return(
            <button onClick={this.addStamp}>Add to Stampbook</button>
        )
    }
}