import React from 'react';
import {Link} from 'react-router-dom';
import './css/style.css';
import portfolio_logo_red from './images/portfolio_logo_red.png';

const Home = () => {
    return (
        
        <div>
        <div className="container">
        <div className="logo-container">
        <img className='logo' src={portfolio_logo_red} alt="Portfolio Logo Red"/>
        </div>
        <div className="content">
            <h2 id='animated-text' className='welcome'>Welcome, my name is</h2>
            <h1 id='animated-text' className='name'>Amy Mummert</h1>
            <p id='animated-text' className='message'>I'm a software engineer focusing on web development.  
            I create and build fullstack applications with engaging user interfaces 
            and responsive designs.</p>
            <p id='animated-text'><Link to="/projects"><button className='button-24-home'>Check Out My Work!</button></Link></p>
        </div>
        </div>
        </div>
        
    );
};

export default Home;