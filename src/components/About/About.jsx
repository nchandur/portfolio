import React from "react";
import pfp from "../../assets/images/pfp.jpg";
import "./About.css";
import ButtonDark from "../ButtonDark/ButtonDark";


const About = () => {
    return (
        <div id="about" className="about">
            <div className="about-title">
                ABOUT ME
            </div>
            <div className="about-content">
                <div className="about-left">
                    <img src={ pfp } alt="Profile picture not available" />
                </div>
                <div className="about-right">
                    <p>
                        Hello there! I am a second graduate student diving deep into the world of Data Science at the University of Maryland, College Park. I'm all about making sense of numbers and building cool tools to do just that.
                    </p>
                    <p>
                        When I'm not knee-deep in data, you'll often find me immersed in the bleak world of Dark Souls or in the pages of a captivating novel. I'm also an avid runner, always seeking new paths to explore. Whether it's crunching numbers, slaying bosses, or navigating the trails, I thrive on diving into exciting adventures. Feel free to explore my projects and get in touch!
                    </p>
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                        <ButtonDark text="View Resume" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About;

