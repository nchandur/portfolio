import React from "react";
import ButtonDark from "../ButtonDark/ButtonDark";
import "./Contact.css";

const Contact = () => {
    return(
        <div id="contact" className="contact">
            <h1 className="contact-title">CONTACT</h1>
            <ButtonDark className="contact-button" text = "Contact me" />
        
        </div>
    )
}

export default Contact;