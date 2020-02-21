import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav id="top-nav">
            <ul>
                <li><a href="#">home</a></li>
                <li><a href="#">projects</a></li>
                <li><a href="#">about</a></li>
                <li><a href="#">contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;