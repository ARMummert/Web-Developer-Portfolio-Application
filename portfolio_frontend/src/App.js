import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/header.js'
import Home from './components/home.js'
import About from './components/about.js'
import Projects from './components/projects.js'
import Experience from './components/experience.js'
import Contact from './components/contact.js'
import './components/css/style.css';


function App() {
  return (
    
    <Router>
     <Header />
      <div>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
