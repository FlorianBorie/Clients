import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_6u6we2i', 'template_scsq9je', form.current, 'user_L2OhZMvSPR4uKFbbo4TGD')
      .then((result) => {
          console.log(result.text);
          alert("Mail bien envoyé !")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Email</label>
      <input type="email" name="user_email" />
      <input type="submit" value="Send" />
    </form>
  );
};