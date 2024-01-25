// src/components/ContactForm.js
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('http://127.0.0.1:8000/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          // Handle successful submission (e.g., show a success message or redirect)
          console.log('Form submitted successfully!');
        } else {
          // Handle other status codes (e.g., show an error message)
          const data = await response.json();
          console.error('Error submitting form:', data);
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    };
  
    return (
      <form className='form' onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label> 
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message" value={formData.message} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  };
  
  export default ContactForm;