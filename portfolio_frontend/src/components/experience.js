import React, { useState, useEffect } from 'react';

const Experience = () => {
  const [experienceData, setExperienceData] = useState([]);
  const [programmingExperienceData, setProgrammingExperienceData] = useState([]);
  const [certificationsData, setCertificationsData] = useState([]);
  const [achievementsData, setAchievementsData] = useState([]);
  const [educationData, setEducationData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data for 'experience' model
        const experienceResponse = await fetch('http://127.0.0.1:8000/api/experience/');
        const experienceData = await experienceResponse.json();
        setExperienceData(experienceData);

        // Fetch data for 'programming_experience' model
        const programmingExperienceResponse = await fetch('http://127.0.0.1:8000/api/programming_experience/');
        const programmingExperienceData = await programmingExperienceResponse.json();
        setProgrammingExperienceData(programmingExperienceData);

        // Fetch data for 'certifications' model
        const certificationsResponse = await fetch('http://127.0.0.1:8000/api/certifications/');
        const certificationsData = await certificationsResponse.json();
        setCertificationsData(certificationsData);

        // Fetch data for 'achievements' model
        const achievementsResponse = await fetch('http://127.0.0.1:8000/api/achievements/');
        const achievementsData = await achievementsResponse.json();
        setAchievementsData(achievementsData);

        // Fetch data for 'education' model
        const educationResponse = await fetch('http://127.0.0.1:8000/api/education/');
        const educationData = await educationResponse.json();
        setEducationData(educationData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the function to fetch data
    fetchData();
  }, []); 
  return (
    <div>
      <h1 className='experience'>Experience</h1>
      <div className='horizontal-line3'></div>
      <h2 className='experience-page' >Work Experience</h2>
      <ul id='data' className='vertical-line'>
        {experienceData.map(experience => (
          <li className='proj-title' key={experience.id}>
            <h2 className='job-title'>{experience.name}</h2>
            <h3 className='job-year'>2009-2016</h3>
            <div className='vertical-line2'></div>
            <p id='work-exp'>{experience.company}</p>
            <p id='work-exp2'>{experience.location}</p>
            <p id='work-exp3'>{experience.start_date}</p>
            <p id='work-exp4'>{experience.description}</p>
            <p id='work-exp5'>{experience.programming_experience}</p>
          </li>
        ))}
      </ul>
      <ul id='data' className='vertical-line'>
        {programmingExperienceData.map(programmingexperience => (
          <li className='proj-title' key={programmingexperience.id}>
            <h2>{programmingexperience.name}</h2>
            <p>{programmingexperience.proficiency_level}</p>
            <p>{programmingexperience.proficiency}</p>
          </li>
        ))}
      </ul>
      <ul className='data'>
        {certificationsData.map(certification => (
          <li className='proj-title'key={certification.id}>
            <h2>{certification.certificate_name}</h2>
            <p>{certification.date_received}</p>
          </li>
        ))}
      </ul>
      <ul className='data'>
        {achievementsData.map(achievements => (
          <li className='proj-title' key={achievements.id}>
            <h2>{achievements.name}</h2>
            <p>{achievements.description}</p>
            <p>{achievements.date_received}</p>
          </li>
        ))}
      </ul>
      <ul className='data'>
        {educationData.map(education => (
          <li className='proj-title' key={education.id}>
            <h2>{education.degree}</h2>
            <p>{education.institution}</p>
            <p>{education.graduation_date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
