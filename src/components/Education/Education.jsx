import React, { useState } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import "./Education.css";
import ButtonLight from "../ButtonLight/ButtonLight";

const Education = () => {
    const [showMastersCoursework, setShowMastersCoursework] = useState(false);
    const [showBachelorsCoursework, setShowBachelorsCoursework] = useState(false);

    const toggleMastersCoursework = () => {
        setShowMastersCoursework(!showMastersCoursework);
    };

    const toggleBachelorsCoursework = () => {
        setShowBachelorsCoursework(!showBachelorsCoursework);
    };

    return (
        <div id="education" className="education">
            <h1>EDUCATION</h1>

            <div className="education-card-row">
                <div id="masters" className="degree">
                    <img src="images/umd.jpeg" alt="University of Maryland" className="degree-img" />
                    <div className="degree-header">
                        <h2>University of Maryland</h2>
                        <span className="degree-date">August 2023 - May 2025</span>
                    </div>
                    <h5>College Park, MD, United States of America</h5>
                    <p>Master of Science in Data Science</p>
                    <div className="coursework">
                        <div className="button-light-container" onClick={toggleMastersCoursework}>
                            <ButtonLight text={showMastersCoursework ? "Hide Coursework" : "Show Coursework"} />
                        </div>
                        {showMastersCoursework && (
                            <ListGroup variant="flush" className="coursework-list">
                                <ListGroup.Item className="coursework-item">Natural Language Processing</ListGroup.Item>
                                <ListGroup.Item className="coursework-item">Computer Vision</ListGroup.Item>
                                <ListGroup.Item className="coursework-item">Data Representation and Modeling</ListGroup.Item>
                                <ListGroup.Item className="coursework-item">Big Data Systems</ListGroup.Item>
                                <ListGroup.Item className="coursework-item">Algorithms of Data Science</ListGroup.Item>
                            </ListGroup>
                        )}
                    </div>
                </div>

                <div id="bachelors" className="degree">
                    <img src="images/pes.jpeg" alt="PES University" className="degree-img" />
                    <div className="degree-header">
                        <h2>PES University</h2>
                        <span className="degree-date">August 2018 - May 2022</span>
                    </div>
                    <h5>Bengaluru, KA, India</h5>
                    <p>Bachelor of Technology in Electronics and Communication Engineering</p>
                    <div className="coursework">
                        <div className="button-light-container" onClick={toggleBachelorsCoursework}>
                            <ButtonLight text={showBachelorsCoursework ? "Hide Coursework" : "Show Coursework"} />
                        </div>
                        {showBachelorsCoursework && (
                            <ListGroup variant="flush" className="coursework-list">
                                <ListGroup.Item className="coursework-item">Engineering Mathematics</ListGroup.Item>
                                <ListGroup.Item className="coursework-item">Linear Algebra</ListGroup.Item>
                                <ListGroup.Item className="coursework-item">Random Processes</ListGroup.Item>
                                <ListGroup.Item className="coursework-item">Artificial Neural Networks</ListGroup.Item>
                                <ListGroup.Item className="coursework-item">Pattern Classification</ListGroup.Item>
                            </ListGroup>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
