import React from 'react'
import '../styles/navbar.css'
import moon from '../assets/images/moon.svg';
import sun from '../assets/images/sun.svg';
import { NavLink } from 'react-router-dom';

const Navbar = ({ theme, toggleTheme }) => {
    return (
        <nav className="navbar">
            <div className="container">
            <strong className="big-font"><NavLink to="/">Weekly.</NavLink></strong>
                <img onClick={() => toggleTheme()} className="logo" src={theme === 'light' ? moon : sun} alt="mode"/>                
            </div>
        </nav>
    )
}

export default Navbar
