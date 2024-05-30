import React, { useEffect, useRef } from "react";
import "./Professional.css";
import { work } from "./work.js";

const Professional = () => {
    const workRefs = useRef([]);

    useEffect(() => {
        workRefs.current.forEach((ref, index) => {
            setTimeout(() => {
                if (ref) {
                    ref.classList.add(index % 2 === 0 ? 'slide-in-left' : 'slide-in-right');
                }
            }, index * 1000);
        });
    }, []);

    return (
        <div id="professional" className="professional">
            <h1>CAREER OVERVIEW</h1>
            {work.map((item, index) => (
                <div
                    key={index}
                    className="work-card"
                    ref={(el) => (workRefs.current[index] = el)}
                >
                    <div className="work-header">
                        <h3>{item.name}</h3>
                        <span>{item.time}</span>
                    </div>
                    <div>
                        <h4>{item.location}</h4>
                        <h5>{item.role}</h5>
                        <p>{item.summary}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Professional;
