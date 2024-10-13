import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

function Contact() {
    const form = useRef();
    const serviceID = 'default_service';
    const templateID = 'template_50cuuao';

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(serviceID, templateID, form.current, 'ZfsTjb0jekW8mR8wM')
            .then(() => {
                alert('Sent!');
            }, (error) => {
                alert(JSON.stringify(error));
            });
    };

    return (
        <div className="contact-form">
          <h2>Contact us! We reply within 24 hours.</h2>
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="from_name" required />
            <label>Email</label>
            <input type="email" name="reply_to" required />
            <label>Message</label>
            <textarea name="message" required />
            <div className="button-container">
                <button type="submit">Send </button>
            </div>
          </form>
        </div>
      );
};

export default Contact;