import React from 'react';
import './css/style.css';
import portfolio_logo_red from './images/portfolio_logo_red.png';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div>
            
        <header>
            <div className='logo'>
                <img src={portfolio_logo_red} alt="Portfolio Logo Red"/>
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
        <footer id='footer-text'>&copy; 2024 Amy Mummert. All Rights Reserved <div className='footer-line'>  </div></footer>
        
        </div>
       
        
    );
};

export default Header;