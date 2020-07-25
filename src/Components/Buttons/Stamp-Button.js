import React, {Component} from 'react';
import StampbookFetchService from '../../Services/StampbookFetchService';
import './Stamp-Button.css'


export default class StampButton extends Component {
    addStamp = (e) => {
        //when the userId is included into the fetch request, the computer yells at me :(
        //where is this second header that the computer is freaking out about?
        StampbookFetchService.postNewStamp(this.props.fullname, this.props.id)
        .then(res => {
            if (res.ok){
                alert(`you have stamped ${this.props.fullname}, and it has successfully been added to your passport`)
                return res.json
            }
        })
        .catch(error =>{
            alert('Unfortunatly something went wrong! You stamp was unable to be added to your passport')
            console.log(error)
        })
    }
    render(){
        return(
            <button id="stamp-button" onClick={this.addStamp}>Add to Stampbook</button>
        )
    }
}