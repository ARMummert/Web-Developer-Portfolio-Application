import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    const fetchProjectsData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/projects/');
        if (!response.ok) {
          throw new Error(`Error fetching projects: ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Projects data:', data);
        setProjectsData(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    
    fetchProjectsData();
  }, []); 
  
  return (
    <div className='data'>
      <h1 className='welcome'>Projects Page</h1>
      <ul>
        {projectsData.map(project => (
          <li key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p>{project.github}</p>
            <p>{project.demo}</p>
            <p>{project.image}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;