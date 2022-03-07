import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";
import {useStateValue} from './StateProvider';
import { auth } from './firebase';

function Header({bgColor, position}) {

    const [{user}, dispatch] = useStateValue();

    const onLogOut = (event) => {
        event.preventDefault();
        if(user){
            auth.signOut();
        }
    }
    return (
        <div className="header" style={{backgroundColor: bgColor, position: position}}>
             { user ?
                <div class="user-snackbar"><p>Hello, {user?.email}</p><button onClick={onLogOut}>Sign out</button></div>: <div style={{display: 'none'}}></div>}
            <nav class="navbar navbar-expand-lg">
                <a class="navbar-brand" href="#">Filtercodes</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="fas fa-bars"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Link to="/">
                                <a class="nav-link">Home</a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/blog">
                                <a class="nav-link">Blog</a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/register">
                                <a class="nav-link">Register</a>
                            </Link>
                        </li>
                        {user ? <li class="nav-item">
                            <Link to="/dashboard">
                                <a class="nav-link">Dashboard</a>
                            </Link>
                        </li> : <i></i>}
                        <li class="nav-item">
                            <a class="nav-link">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header
