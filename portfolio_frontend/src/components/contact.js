import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState(null); 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitSuccess(true);
        console.log('Form submitted successfully!');
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      } else {
        const data = await response.json();
        console.error('Error submitting form:', data);
        setErrors({
          message: 'Please fill in all boxes.'
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      {submitSuccess && <SuccessMessage />}
      {!submitSuccess && (
        <Form
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          formData={formData}
          errors={errors} 
        />
      )}
    </div>
  );
};

const SuccessMessage = () => (
  <div className="success-message">Form submitted successfully! Page will refresh shortly...</div>
);

const Form = ({ handleSubmit, handleChange, formData, errors }) => (
  <form className="form" onSubmit={handleSubmit}>
    <h1 className="contact-page">Contact</h1>
    <p className="contact-message">Feel free to contact me with any questions or comments!</p>
    <label id="contact-name">
      Name
      <input className="name-box" type="text" name="name" value={formData.name} onChange={handleChange} />
    </label>
    <br />
    <label id="contact-name">
      Email
      <input className="email-box" type="email" name="email" value={formData.email} onChange={handleChange} />
    </label>
    <br />
    <label id="contact-message">
      Message
      <textarea className="message-box" name="message" value={formData.message} onChange={handleChange} />
    </label>
    <br />
    {errors && errors.message && <div className="error-message">{errors.message}</div>}
    <button className="button-24-contact" type="submit">
      Submit
    </button>
    
   
  </form>
);

export default ContactForm;
