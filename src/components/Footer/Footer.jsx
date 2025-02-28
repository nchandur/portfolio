import React from "react";
import "./Footer.css";

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <div className="footer">
            <div className="back-to-top-container">
                <a rel="noreferrer" href="#home" className="back-to-top">
                    <i className="fa fa-angle-up fa-3x" aria-hidden="true"></i>
                </a>
                <div className="social-links">
                    <a rel="noreferrer" href="https://linkedin.com/in/nischal-chandur" target="_blank">
                        <i className="fa fa-linkedin fa-inverse"></i>
                    </a>
                    <a rel="noreferrer" href="https://github.com/nchandur" target="_blank">
                        <i className="fa fa-github fa-inverse"></i>
                    </a>
                    <a rel="noreferrer" href="https://www.instagram.com/chandur_nischal/" target="_blank">
                        <i className="fa fa-instagram fa-inverse"></i>
                    </a>
                </div>
            </div>
            <hr />
            <p>
                &copy; {year} - Created and maintained by <a rel="noreferrer" href="/">Nischal Chandur</a>
            </p>

        </div>
    );
}

export default Footer;
