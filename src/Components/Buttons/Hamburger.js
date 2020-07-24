import React, {Component} from 'react';
import './Hamburger.scss'


export default class Hamburger extends Component{

    handleClick = () => {
        const hamburger = document.querySelector('.hamburger');
        const header = document.querySelector('.header-bar');
        hamburger.classList.toggle('hamburger--active');
        header.classList.toggle('header-bar--active');
      }


    render(){
        return(
            <button className="hamburger" onClick={this.handleClick}>
            <span className="hamburger__box">
                <span className="hamburger__inner"></span>
            </span>
            </button>
        )
    }
}