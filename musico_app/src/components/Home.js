import React from "react";
import github from "../images/github.png";
import "../styles/home.css";
import Contact from "./Contact";
import Services from "./Services";

function Home() {
    return (
        <div className="home">
            <section id="home" data-color="">
                <h1>
                    Welcome to musico
                </h1>
            </section>
            <section id="about" data-coor="white">
                <h2>
                    About Us
                </h2>
                <p>
                    lalalala
                </p>
            </section>
            <section id="services" data-color="#faf0e6">
                <h2>
                    Services
                </h2>
                <Services />
            </section>
            <section id="booking" data-color="white">
                <h2>
                    Booking
                </h2>
                <p>
                    lalalala
                </p>
            </section>
            <section id="contact" data-color="#faf0e6">
                <h2>
                    Leave us a message! We reply within 24 hours.
                </h2>
                <Contact />
            </section>
            <footer>
                <p>&copy; 2024 Musico. Website coded and built by Aimee Co. All rights reserved.</p>
                <a
                href="https://github.com/aimeekco/musico"
                target="_blank"
                rel="noopener noreferrer"
                className="github"
                >
                    <img src={github} alt="Github" />
                </a>
            </footer>
        </div>
    );
}

export default Home;