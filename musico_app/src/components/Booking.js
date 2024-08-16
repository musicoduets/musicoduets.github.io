import React from 'react';
import '../styles/booking.css';  
import cashIcon from '../images/cash-icon.jpg';
import checkIcon from '../images/check-icon.jpg';
import zelleIcon from '../images/zelle-icon.png';
import venmoIcon from '../images/venmo-icon.png';

function Booking() {
    return (
        <div className="booking-section">
            <h2 className="booking-title">Booking and Rates</h2>
            <hr className="booking-divider" />
            <p className="booking-text">
                We require a 50% deposit to secure your booking. The remaining balance is due on the day of the event.
                We accept the following payment methods:
            </p>
            <div className="payment-methods">
                <div className="payment-method">
                    <img src={cashIcon} alt="Cash" />
                    <p>Cash</p>
                </div>
                <div className="payment-method">
                    <img src={checkIcon} alt="Check" />
                    <p>Check</p>
                </div>
                <div className="payment-method">
                    <img src={zelleIcon} alt="Zelle" />
                    <p>Zelle</p>
                </div>
                <div className="payment-method">
                    <img src={venmoIcon} alt="Venmo" />
                    <p>Venmo</p>
                </div>
            </div>
            <p className="booking-text">
                Please <a href="#contact" className="contact-link">contact us</a> for a quote.
            </p>
        </div>
    );
}

export default Booking;
