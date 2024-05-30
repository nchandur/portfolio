import React from "react";
import "./Skills.css";
import { skills } from "./SkillList.js";

const Skills = () => {
    return (
        <div id="skills" className="skills">
            <h1>TECHNICAL SKILLS</h1>
            <div className="skills-row">
                {skills.map((skill, index) => (
                    <div 
                        key={index} 
                        className={`skill-card ${index % 2 === 0 ? 'slide-left even' : 'slide-right odd'}`} 
                        style={{ animationDelay: `${index * 0.5}s` }}
                    >
                        <h5>{skill.title}</h5>
                        <p>
                            {skill.content.join(" | ")}
                        </p>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Skills;
