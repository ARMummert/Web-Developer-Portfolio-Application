import React from 'react';
import './css/style.css';
import PortfolioLogo from './images/PortfolioLogo.png';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div>
            
        <header>
            <div className='logo'>
                <img src={PortfolioLogo} alt="Portfolio Logo"/>
            </div>
            <nav >
                <ul>
                    <li className='navigation'>
                        <Link className='nav-links' to="/">Home</Link>
                    </li>
                    <li className='navigation'> 
                        <Link className='nav-links' to="/about">About</Link>
                    </li>
                    <li className='navigation'>
                        <Link className='nav-links' to="/projects">Projects</Link>
                    </li>
                    <li className='navigation'>
                        <Link className='nav-links' to="/experience">Experience</Link>
                    </li>
                    <li className='navigation'>
                        <Link className='nav-links' to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
        <footer>&copy; 2024 Amy Mummert. All Rights Reserved.</footer>
        </div>
       
        
    );
};

export default Header;