import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './CSS/navbar.css'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <div className="nav-wrapper navbarStyling">
                <Link to="/" className="logoStyle left">Resume Builder</Link>
                <ul id="nav-mobile" className="right">
                    <li><Link to="/signin" className="logOutButton">Sign In</Link></li>
                    <li><Link to="/signup" className="logOutButton">Sign Up</Link></li>
                    <li><Link to="/" className="logOutButton">Log Out</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;