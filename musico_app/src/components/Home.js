import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import github from "../images/github.png";
import "../styles/home.css";
import Contact from "./Contact";
import Services from "./Services";
import Booking from "./Booking";
import About from "./About";

function Home() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="home">
            <section id="home" data-color="">
                <h1>
                    Welcome to musico
                </h1>
            </section>
            <section id="about" data-color="white" data-aos="fade-up">
                <About />
            </section>
            <section id="services" data-color="#faf0e6" data-aos="fade-up">
                <h2>
                    Services
                </h2>
                <Services />
            </section>
            <section id="booking" data-color="white" data-aos="fade-up">
                <Booking />
            </section>
            <section id="contact" data-color="#faf0e6" data-aos="fade-up">
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