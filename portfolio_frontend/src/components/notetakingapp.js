import React from 'react';
import Slideshow from './slideshow.js';

const App = () => {
  const images = [
    './images/note-taking-app2.png',
    './images/note-taking-app3.png',
    './images/note-taking-app4.png',
    './images/note-taking-app5.png',
    './images/note-taking-app6.png',
    './images/note-taking-app7.png',
    './images/note-taking-app8.png',
    './images/note-taking-app9.png',
    './images/note-taking-app10.png',
    './images/note-taking-app11.png',
    './images/note-taking-app12.png',
  ];

  return (
    <div>
    <h1 className='note-taking-app'>UI/UX Design - Note Taking Application</h1>
      <Slideshow images={images}/>
    </div>
  );
};

export default App;
