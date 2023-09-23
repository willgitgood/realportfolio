'use client'

import './Contact.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_t4y9rae', 'template_nm646e6', form.current, 'kANMfyAGGTFog4uhl')
        .then((result) => {
            console.log(result.text);
            form.current.reset();
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div className="contact"> 
    <div className="contact-container">
        <div className="contact-text">
            <h1>Let's create together</h1>
            <span>🦾</span>
        </div>
    <form ref={form} onSubmit={sendEmail}>
        <div className="form-heading">
        <h1>Reach out to me via email or Linkedin</h1>
        <span></span>
        </div>
        <label htmlFor="name">Name:</label>
        <input type="text" name="user_name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" name="user_email" required />

        <label htmlFor="Reason">Reason:</label>
        <textarea name="message" required></textarea>

        <button type='submit'>Send</button>

    </form>
    </div>
    </div>
  )
}


export default Contact
