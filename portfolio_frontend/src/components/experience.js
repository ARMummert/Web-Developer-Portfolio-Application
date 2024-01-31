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
      <h1 className='welcome'>Experience Page</h1>
      <ul className='data'>
        {experienceData.map(experience => (
          <li key={experience.id}>
            <h2>{experience.name}</h2>
            <p>{experience.company}</p>
            <p>{experience.location}</p>
            <p>{experience.start_date}</p>
            <p>{experience.description}</p>
            <p>{experience.programming_experience}</p>
          </li>
        ))}
      </ul>
      <ul className='data'>
        {programmingExperienceData.map(programmingexperience => (
          <li key={programmingexperience.id}>
            <h2>{programmingexperience.name}</h2>
            <p>{programmingexperience.proficiency_level}</p>
            <p>{programmingexperience.proficiency}</p>
          </li>
        ))}
      </ul>
      <ul className='data'>
        {certificationsData.map(certification => (
          <li key={certification.id}>
            <h2>{certification.certificate_name}</h2>
            <p>{certification.date_received}</p>
          </li>
        ))}
      </ul>
      <ul className='data'>
        {achievementsData.map(achievements => (
          <li key={achievements.id}>
            <h2>{achievements.name}</h2>
            <p>{achievements.description}</p>
            <p>{achievements.date_received}</p>
          </li>
        ))}
      </ul>
      <ul className='data'>
        {educationData.map(education => (
          <li key={education.id}>
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
