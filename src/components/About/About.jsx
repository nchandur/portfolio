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

                        I'm a recent graduate from the University of Maryland, College Park, where I earned my Master's in Data Science. I've always gravitated toward the overlap between math and computer science, and data science felt like the natural place where both could come to life. For me, there's something incredibly satisfying about finding patterns in chaos: breaking down complex problems, building systems that work, and seeing messy data turn into something clear and useful. <br></br><br></br>

                        Over the past few years, I've worked with teams across industries, tackling projects in everything from renewable energy to finance. I enjoy the challenge of working with real-world data. It's rarely perfect, often unpredictable, and always full of surprises. What keeps me going is the idea that, with the right tools and enough curiosity, even the noisiest data has a story to tell. <br></br><br></br>
                        
                        Outside of work, I'm usually somewhere between a long trail run, a tough Dark Souls boss fight, or a book I can't put down. I like a good challenge, whether it's in code, games, or life. Feel free to explore my projects and reach out if you'd like to connect.

                    </p>
                    <a href="Resume.pdf" target="_blank">
                        <ButtonDark text="View Resume" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About;