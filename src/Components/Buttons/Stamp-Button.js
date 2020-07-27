import React, {Component} from 'react';
import StampbookFetchService from '../../Services/StampbookFetchService';
import './Stamp-Button.css'


export default class StampButton extends Component {
    addStamp = (e) => {
        StampbookFetchService.postNewStamp(this.props.fullname, this.props.id)
        .then(res => {
            if (res.ok){
                alert(`you have stamped ${this.props.fullname}, and it has successfully been added to your passport`)
                return res.json
            }
        })
        .catch(error =>{
            alert('Unfortunatly something went wrong! You stamp was unable to be added to your passport')
            console.error(error)
        })
    }
    render(){
        return(
            <button id="stamp-button" onClick={this.addStamp}>Add to Stampbook</button>
        )
    }
}