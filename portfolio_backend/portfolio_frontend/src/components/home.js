import React from 'react';
import {Link} from 'react-router-dom';
import './css/style.css';

const Home = () => {
    return (
        <div>
            <h2 className='welcome'>Welcome, my name is</h2>
            <h1 className='name'>Amy Mummert</h1>
            
            <p className='message'>I'm a software engineer focusing on web development.  
            I create and build fullstack applications with engaging user interfaces 
            and responsive designs.</p>
            <p><Link to="/projects"><button className='button-24-home'>Check Out My Work!</button></Link></p>
        </div>
        
    );
};

export default Home;