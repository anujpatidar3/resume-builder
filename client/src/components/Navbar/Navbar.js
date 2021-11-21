import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './navbar.css'
import { Link } from 'react-router-dom';
import { Container} from 'react-bootstrap';

const NavBar = () => {
    return (
        <nav className="navbarStyling">
            <div className="nav-wrapper">
                <Container>
                    <Link to="/" className="logoStyle left">Resume Builder</Link>
                    <ul id="nav-mobile" className="right">
                        <li><Link to="/signin" className="logOutButton">Sign In</Link></li>
                        <li><Link to="/signup" className="logOutButton">Sign Up</Link></li>
                        <li><Link to="/" className="logOutButton">Log Out</Link></li>
                    </ul>
                </Container>
            </div>
        </nav>
    )
}

export default NavBar;