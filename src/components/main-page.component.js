import React, { Component } from 'react';
import axios from 'axios';

import './main-page.component.css';
import homeLogo from "../pictures/logo.png";

export default class MainPage extends Component {
    render() {
        return (
            <div className= "mainpage_wrapper">
                <h1>Welcome to the main page! Please sign up to donate!</h1>
                <img className = "logo" src ={homeLogo} alt="logo"/>
            </div>
            

        )
    }
}