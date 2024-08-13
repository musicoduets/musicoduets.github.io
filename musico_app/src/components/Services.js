import React from 'react';
import '../styles/services.css';
import cello from '../images/cello.jpg';

const services = [
    { id: 1, title: "Service 1", image: cello },
    { id: 2, title: "Service 2", image: cello },
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
