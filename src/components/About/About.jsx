import React from "react";
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
                    <img src="images/pfp.jpg" alt="Profile picture not available" />
                </div>
                <div className="about-right">
                    <p>
                    I'm a second-year graduate student diving into the world of Data Science at the University of Maryland, College Park. I'm passionate about making sense of numbers and building innovative tools that make data more accessible and meaningful. My focus is on bridging the gap between complex AI systems and everyday users, ensuring that data is used ethically and insights are clear and actionable.
                    <br></br>
                    <br></br>
                    When I'm not knee-deep in data, you'll find me immersed in the challenging world of Dark Souls or absorbed in a captivating novel. I'm also an avid runner, always exploring new trails. Whether it's crunching numbers, slaying bosses, or hitting the paths, I thrive on exciting adventures.

                    Feel free to explore my projects and get in touch!
                    </p>
                    <a href="Resume/Resume.html" target="_blank" rel="noopener noreferrer">
                        <ButtonDark text="View Resume" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About;