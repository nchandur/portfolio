import React, { useState } from "react";
import ButtonDark from "../ButtonDark/ButtonDark";
import "./Contact.css";

const Contact = () => {
    const [notification, setNotification] = useState('');

    const copyEmail = () => {
        const email = "chandur.nischal@gmail.com";

        navigator.clipboard.writeText(email).then(() => {
            setNotification("email copied");
            setTimeout(() => {
                setNotification('');
            }, 500);
        }).catch(_ => {
            setNotification("failed to copy email.");
            setTimeout(() => {
                setNotification('');
            }, 500);
        });
    }

    return (
        <div id="contact" className="contact">
            <h1>CONTACT</h1>
            <div className="contact-content">
                <h2>Let's work together!</h2>
                <div onClick={copyEmail}>
                    <ButtonDark className="contact-button" text="Contact me" />
                </div>
                {notification && <div className="notification">{notification}</div>}
            </div>
        </div>
    );
}

export default Contact;
