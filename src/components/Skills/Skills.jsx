import React from "react";
import "./Skills.css";
import { skills } from "./SkillList.js";

const Skills = () => {
    return (
        <div id="skills" className="skills">
            <h1>TECHNICAL SKILLS</h1>
            {skills.map((skill, index) => (
                <div key={index} className="skill-card">
                    <h5>{skill.title}</h5>
                    <p>
                        { skill.content.join(" | ") }
                    </p>
                </div>
            ))}
        </div>
    );
}

export default Skills;
