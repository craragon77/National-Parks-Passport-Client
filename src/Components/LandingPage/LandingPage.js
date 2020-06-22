import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class LandingPage extends Component {
    render(){
        return (
            <>
                <header>
                    <div className="navbar">
                        Nav Bar
                    </div>
                </header>
                <body>
                    <main>
                        <section className="title-section">
                            <h1>[Catchy National Parks Passport Here]</h1>
                            <h3>A Paperless Passport to America's Historic and National Wonders</h3>
                        </section><br/>
                        <section className="info-section">
                            <h2>The National Parks Passport</h2>
                            <p>
                                In 1872, the Grant administration established Yellowstone National Park in modern day Montana and Wyoming 
                                "as a public park or pleasuring-ground for the benefit and enjoyment of the people". Almost 150 years later, 
                                the United States has established over 400+ sites of cultural, historic, military, and environmental importance 
                                which make up the National Park System. Individual, free-of-change stamps are available in every National Park's ranger station 
                                to record the park name and date of attendence, and Passport to Your National Parks Program began in 1986 as a means to 
                                collect stamps and educate the public of our nations many National Parks
                            </p>
                        </section><br/>
                        <section className="how-to-section">
                            <h2>How Does This Work?</h2>
                            <p>
                                Snazzy Program Name is an app to serve as a paperless Passport to our National Parks. This free-of-charge program invites outdoorspeople, 
                                history lovers, and national park enthusiests to log every national park they have attended or wish to visit, as well as to 
                                serve as a guide to the wonders that our National Parks have to offer!
                            </p>
                        </section><br />
                        <section className="signup-section">
                            <h2>Make an account and get stampin!</h2>
                            <Link to={'/Signup'}>Make an account!</Link>
                            <Link to={'/Login'}>Login to my account!</Link>
                        </section><br/>
                    </main>
                </body>
                <footer class="footer">
                    Created by Chris Aragon 2020
                </footer>
            </>
        )
    }
}