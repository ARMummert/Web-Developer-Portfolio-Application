import React, { useState, useEffect } from 'react';

const Experience = () => {
  const [experienceData, setExperienceData] = useState([]);

  useEffect(() => {
    const fetchExperienceData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/experience/');
        if (!response.ok) {
          throw new Error(`Error fetching experience: ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Experience data:', data);
        setExperienceData(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    // Call the function to fetch data
    fetchExperienceData();
  }, []); // Empty dependency array to ensure useEffect runs only once on component mount

  return (
    <div className='data'>
      <h1 className='welcome'>Experience Page</h1>
      <ul>
        {experienceData.map(item => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            {/* Additional fields specific to your models */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
