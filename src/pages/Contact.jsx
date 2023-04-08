import React, { useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Navbar from '../components/Navbar';

function Contact() {
  
  const [state, handleSubmit] = useForm("mbjepjln");
  const [email, setEmail] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = event => {
    const { name, value } = event.target;
    setEmail(prevState => ({ ...prevState, [name]: value }));
  };

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page dark">
      <Navbar/>
      <form onSubmit={handleSubmit} className='contact-container responsive-width'>
        <h1 className='heading-one'>{!state.succeeded ? 'Get In Touch' : "Thanks for reaching out!"}</h1>
        <div className="label">
          <label className="heading-five" htmlFor="name">Name</label>
          <input
            id="name"
            type="text" 
            name="name"
            placeholder='Hamza Amin'
            value={email.name}
            onChange={handleChange}
          />
        </div>
        <div className="label">
          <label className="heading-five" htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email" 
            name="email"
            placeholder='hamza@odysseydesigners.com'
            value={email.email}
            onChange={handleChange}
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
        </div>
        <div className="label">
          <label className="heading-five" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder='Your message here'
            value={email.message}
            onChange={handleChange}
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
        </div>
        <button className='main-button' type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;