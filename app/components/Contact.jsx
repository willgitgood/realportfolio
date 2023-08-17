'use client'

import './Contact.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <form>
        <div className="form-heading">
        <h1>Reach out to me via email or Linkedin</h1>
        <span></span>
        </div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="Reason">Reason:</label>
        <textarea name="reason" id="reason" required></textarea>

        <button type='submit'>Send</button>

    </form>
  )
}


export default Contact
