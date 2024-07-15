import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    // State to track whether the menu is open or closed
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);


    // Function to toggle the menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    // const Handledrop=()=>{
    //       setIsOpen2(!isOpen2)
    // }

    return (
        <div className='header'>
            <nav className={`navbar ${isOpen ? 'open' : ''}`}>
                <div className="navbar-left">
                    <Link to='/home'>
                        <img src={require('../Logo/IPO-logo.png')} alt="Logo" className="navbar-logo" />

                    </Link>
                </div>
                <div className="menu-button" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={`navbar-right ${isOpen ? 'open' : ''}`}>
                    <li><Link to="/" className="navbar-link">Home</Link></li>
                    <li><Link to="/About" className="navbar-link">About us</Link></li>
                    <li><Link to="/Ipo" className="navbar-link">IPO</Link></li>
                    <li><Link to="/Currentsme" className="navbar-link">SME IPO</Link></li>
                    <li><Link to="/" className="navbar-link">Advertise with us</Link></li>
                    <li><Link to="/" className="navbar-link">Contact Us</Link></li>
                    {/* <li><Link to="/admin" className="navbar-link">admin</Link></li> */}

                </ul>
            </nav>
        </div>
    );
}

export default Header;
