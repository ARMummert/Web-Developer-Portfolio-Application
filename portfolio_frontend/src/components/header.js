import React from 'react';
import './css/header.css';
import PortfolioLogo from './images/PortfolioLogo.png';

const Header = () => {
    return (
        <header className='header'>
            <img className='portfolio-logo' src={PortfolioLogo} alt='Portfolio Logo' />
            <nav>
                <li>Home</li>
                <li>About</li>
                <li>Experience</li>
                <li>Projects</li>
                <li>Contact</li>
            </nav>
        </header>
    );
};

export default Header;