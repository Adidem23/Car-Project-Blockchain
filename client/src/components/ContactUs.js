import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';

export const ContactUs = () => {
    
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2456tzr', 'template_wwbwtjo', form.current, 'HUvknbW91xc-zPo0s')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="form678" >
      
      <label>Name</label>
      <input type="text" name="user_name" required/>

      <label>Email</label>
      <input type="email" name="user_email" required />
      
      <label>Message</label>
      <textarea name="message" />
      
      <input type="submit" value="Send" required />

    </form>
  );
};