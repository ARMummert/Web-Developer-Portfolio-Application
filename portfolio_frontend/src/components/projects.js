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
  
  const [OtherProjectData, setOtherProjectData] = useState([]);

  useEffect(() => {
    const fetchOtherProjectData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/other_project/');
        if (!response.ok) {
          throw new Error(`Error fetching projects: ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Other Project data:', data);
        setOtherProjectData(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    
    fetchOtherProjectData();
  }, []); 
  
  return (
    <div>
      <h1 className='project-page'>Featured Projects</h1>
      <div>
      <ul>
        {projectsData.map(project => (
          <li className='proj-id' key={project.id}>
            <h1 className='proj-title' >{project.title}</h1>
            <img className='featured-img' src={project.image} alt={project.title} />
            <p className='proj-desc'>
              {project.description}<br /><hr />
              <span className='git-link'>    
                <a className='repo-link' href={project.github} target="_blank" rel="noopener noreferrer" title={`GitHub: ${project.title}`}>
                  GitHub Repo
                </a>
              </span>
              <span className='git-link'>
                <a className='repo-link' href={project.demo} target="_blank" rel="noopener noreferrer" title={`Demo: ${project.title}`}>
                  View Demo
                </a>
              </span><br />
              <span className='prog-lang'> {project.proj_lang} </span>
            </p>
          </li>
          
        ))}
      </ul>
      </div>
      <h1 className='other-project-page'>Check Out My Other Projects!</h1>
      <ul className='flex-box'>
        {OtherProjectData.map(OtherProject => (
          <li className='other-proj-id' key={OtherProject.id}>
            <h1 className='proj-title'>{OtherProject.title}</h1>
            <p className='other-proj-desc'>
              {OtherProject.description}<br /><hr />
              <span className='git-link'>
                <a className='repo-link' href={OtherProject.demo} target="_blank" rel="noopener noreferrer" title={`Demo: ${OtherProject.title}`}>
                  View Project
                </a>
              </span><br />
              <span className='prog-lang'>{OtherProject.proj_lang}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );  
};

export default Projects;
