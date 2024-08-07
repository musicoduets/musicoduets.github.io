import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_u4wn8qd', 'template_50cuuao', form.current, {
            publicKey: 'ZfsTjb0jekW8mR8wM'
        })
        .then(
            () => {
                console.log("successs");
            },
            (error) => {
                console.log('failed', error.text);
            },
        );
    };

    return (
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" required />
            <label>Email</label>
            <input type="email" name="user_email" required />
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