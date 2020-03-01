import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <nav id="top-nav" role="navigation">
                <ul>
                    <li><a href="#">home</a></li>
                    <li><a href="#">projects</a></li>
                    <li><a href="#">about</a></li>
                    <li><a href="#">contact</a></li>
                </ul>
            </nav>
            <nav id="side-nav" role="navigation">
                <div id="menuToggle">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id="menu">
                        <a href="#"><li>home</li></a>
                        <a href="#"><li>projects</li></a>
                        <a href="#"><li>about</li></a>
                        <a href="#"><li>contact</li></a>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;