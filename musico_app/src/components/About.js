import React from 'react';
import aimee from '../images/aimee.JPEG'
import '../styles/about.css';

function About() {
    return (
        <div className="whole-container">
            <h2> About Us </h2>
            <h3> We are a brother-sister violin and cello duo who have been playing as an ensemble since 2010! </h3>
            <div className = "cards-container">
                <div class="card-container">
                    <div class="card">
                        <div class="card-front">
                            <img src={aimee} alt="Aimee" />
                            <h2>Aimee</h2>
                        </div>
                        <div class="card-back">
                            <p>Short Bio: Instruments, genres, experience, fun facts, etc.</p>
                            <a href="contact.html">Contact Me</a>
                        </div>
                    </div>
                </div>
                <div class="card-container">
                    <div class="card">
                        <div class="card-front">
                            <img src={aimee} alt="Aimee" />
                            <h2>Darren</h2>
                        </div>
                        <div class="card-back">
                            <p>Short Bio: Instruments, genres, experience, fun facts, etc.</p>
                            <a href="contact.html">Contact Me</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;