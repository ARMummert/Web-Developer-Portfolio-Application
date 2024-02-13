import React, { useState, useEffect } from 'react';

const Experience = () => {
  const [experienceData, setExperienceData] = useState([]);
  const [programmingExperienceData, setProgrammingExperienceData] = useState([]);
  const [programmingExperienceExtraData, setProgrammingExperienceExtraData] = useState([]);
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

        // Fetch data for 'programming_experience' model
        const programmingExperienceExtraResponse = await fetch('http://127.0.0.1:8000/api/programming_experience_extra/');
        const programmingExperienceExtraData = await programmingExperienceExtraResponse.json();
        setProgrammingExperienceExtraData(programmingExperienceExtraData);

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
      <ul id='data' className='vertical-line'>
        {experienceData.map(experience => (
          <li className='proj-title' key={experience.id}>
            <h3 className='job-title'>{experience.name}</h3>
            <p className='job-year'>Start Date: {experience.start_date}</p>
            <p className='job-year2'>End Date: {experience.end_date}</p>
            <p id='work-exp'>{experience.company}</p>
            <p id='work-exp2'>{experience.location}</p>
            <p id='work-exp3'>{experience.description}</p>
            <div className='horizontal-line4'></div>
          </li>
          
        ))}
      </ul>
      <ul id='data' >
        <div className='vertical-line2'></div>
      <h3 className='prog-exp'>Programming Experience</h3>
        {programmingExperienceData.map(programmingexperience => (
          <li className='proj-title'key={programmingexperience.id}>
            <p className='prog-lang2'>{programmingexperience.name}</p>
          </li>
          
        ))}
      </ul >
      <ul id='data2'>
        {programmingExperienceExtraData.map(programmingexperienceextra => (
          <li className='proj-title2'key={programmingexperienceextra.id}>
            <p className='prog-lang3'>{programmingexperienceextra.name}</p>
          </li>
        ))}
      </ul>
      <div className='horizontal-line5'></div>
      <ul id='data'>
      <div className='vertical-line3'></div>
        <h3 className='cert-title'>Certifications</h3>
        {certificationsData.map(certification => (
          <li id='cert-box' key={certification.id}>
            <h2 className='cert'>{certification.certificate_name}</h2>
            <p className='cert2'>{certification.date_received}</p>
          </li>
        ))}
      </ul>
      <div className='horizontal-line6'></div>
      <ul className='data'>
      <div className='vertical-line4'></div>
      <h3 className='achieve'>Achievements</h3>
        {achievementsData.map(achievements => (
          <li className='proj-title' key={achievements.id}>
            <h2 id='achievements'>{achievements.name}</h2>
            <p id='achievements'>{achievements.description}</p>
            <p id='achievements'>{achievements.date_received}</p>
          </li>
        ))}
      </ul>
      <div className='horizontal-line7'></div>
      <ul className='data'>
      <h3 className='education'>Education</h3>
        {educationData.map(education => (
          <li className='proj-title' key={education.id}>
            <h2 id='achievements'>{education.degree}</h2>
            <p id='achievements'>{education.institution}</p>
            <p id='achievements'>{education.graduation_date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
