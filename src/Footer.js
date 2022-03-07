import React from 'react';
import './Footer.css';
import facebook from './assets/facebook.png';
import google from './assets/google.png';
import github from './assets/github.png';
import LinkedIn from './assets/linkedin.png';

function Footer() {
    return (
        <div className="footer">
            <div class="left-panel">
                <p>©️ Copyright 2020 Filtercodes</p>
            </div>
            <div class="middle-panel">
                <img src={facebook} />
                <img src={google} />
                <img src={github} />
                <img src={LinkedIn} />
            </div>
            <div class="right-panel">
                <ul>
                    <li>Home  | </li>
                    <li>Blog  | </li>
                    <li>Contact  | </li>
                    <li>Help</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;
