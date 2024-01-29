import React from 'react';
import {Link} from 'react-router-dom';

const About = () => {
    return (
        <div>
        <h1 className='about-page'>About Page</h1>
        <p>Hi, My name is Amy and I am a software engineer focusing on fullstack web development. I live in Washington with my wife and two children and enjoy reading books, long country drives, and exploring open world video games.</p>
        <p>My first experience with computer programming started in 1997 when I was 14 years old.  Windows 95, floppy disks, and Netscape were the cornerstones of new technology being produced by computer programmers.</p>
        <p>Today, my focus is on fullstack web development. My goals are to create user friendly applications with responsive designs and ease of use functionality.</p>
        <p>If you have any questions, feel free to contact me  <Link to="/contact"><button>Contact Me</button></Link></p>
        <p>Thanks for visiting!</p>
            
       
        </div>

        
    );
};

export default About;