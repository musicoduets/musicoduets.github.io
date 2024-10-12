import React from 'react';
import '../styles/services.css';
import flower1 from '../images/flower1.jpg';
import flower2 from '../images/flower2.jpg';
import flower3 from '../images/flower3.avif';
import flower4 from '../images/flower4.webp';

const services = [
    { id: 1, title: "Weddings", image: flower1 },
    { id: 2, title: "Memorials", image: flower4 },
    { id: 3, title: "Birthdays", image: flower3 },
    { id: 4, title: "Other events", image: flower2 },
];

function Services() {
    return (
        <div className="container">
            {services.map(service => (
                <div className="card" key={service.id}>
                    <img className="background" src={service.image} alt={service.title} />
                    <div className="card-content">
                        <svg>...</svg>
                        <h3 className="title">{service.title}</h3>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Services;
