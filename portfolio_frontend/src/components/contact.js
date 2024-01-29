import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        const response = await fetch('http://127.0.0.1:8000/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          console.log('Form submitted successfully!');
        } else {
          const data = await response.json();
          console.error('Error submitting form:', data);
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    };
  
    return (
      
      <form className='form' onSubmit={handleSubmit}>
        <h1 className='contact-page'>Contact</h1>
        <p className='contact-message'>Feel free to contact me with any questions or comments!</p>
        <label id='contact-name'>
          Name
          <input className='name-box'type="text" name="name" value={formData.name} onChange={handleChange} />
        </label> 
        <br />
        <label id='contact-name'>
          Email
          <input className='email-box' type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <label id='contact-message'>
          Message
          <textarea className='message-box' name="message" value={formData.message} onChange={handleChange} />
        </label>
        <br />
        <button className='contact-btn' type="submit">Submit</button>
      </form>
      
    );
  };
  
  export default ContactForm;