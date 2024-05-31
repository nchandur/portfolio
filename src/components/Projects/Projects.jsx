// // import React from "react";
// // import ButtonLight from "../ButtonLight/ButtonLight";
// // import "./Projects.css";
// // import projectList from "./projectList";

// // const Projects = () => {
// //     return (
// //         <div id="projects" className="projects">
// //             <h1>PROJECTS</h1>
// //             {projectList.map((project, index) => (
// //                 <div 
// //                     className="project-card" 
// //                     key={index}
// //                     style={{ 
// //                         animationDelay: `${index * 0.5}s` 
// //                     }}
// //                 >
// //                     <div 
// //                         className="project-card-left"
// //                         style={{ 
// //                             animationDelay: `${index * 0.5}s` 
// //                         }}
// //                     >
// //                         <img src={project.image} alt="project image not available" />
// //                     </div>
// //                     <div 
// //                         className="project-card-right"
// //                         style={{ 
// //                             animationDelay: `${index * 0.5 + 0.3}s` 
// //                         }}
// //                     >
// //                         <h3>{project.title}</h3>
// //                         <p>{project.summary}</p>
// //                         <a href={project.link}><ButtonLight text="View Repository" /></a>
// //                     </div>
// //                 </div>
// //             ))}
// //         </div>
// //     );
// // };

// // export default Projects;


// import React, { useState } from "react";
// import ButtonLight from "../ButtonLight/ButtonLight";
// import "./Projects.css";
// import projectList from "./projectList";

// const Projects = () => {
//     const [showAllProjects, setShowAllProjects] = useState(false);

//     const toggleProjects = () => {
//         setShowAllProjects(!showAllProjects);
//     };

//     const displayedProjects = showAllProjects ? projectList : projectList.slice(0, 3);

//     return (
//         <div id="projects" className="projects">
//             <h1>PROJECTS</h1>
//             {displayedProjects.map((project, index) => (
//                 <div 
//                     className="project-card" 
//                     key={index}
//                     style={{ 
//                         animationDelay: "500ms" 
//                     }}
//                 >
//                     <div 
//                         className="project-card-left"
//                         style={{ 
//                             animationDelay: `${index * 0.5}s` 
//                         }}
//                     >
//                         <img src={project.image} alt="project image not available" />
//                     </div>
//                     <div 
//                         className="project-card-right"
//                         style={{ 
//                             animationDelay: "500ms" 
//                         }}
//                     >
//                         <h3>{project.title}</h3>
//                         <p>{project.summary}</p>
//                         <a href={project.link}><ButtonLight text="View Repository" /></a>
//                     </div>
//                 </div>
//             ))}
//             <div className="toggle-button" onClick={toggleProjects}>
//                 <ButtonLight text={showAllProjects ? "Show Less" : "Show More"} />
//             </div>
//         </div>
//     );
// };

// export default Projects;

import React, { useState } from "react";
import ButtonLight from "../ButtonLight/ButtonLight";
import "./Projects.css";
import projectList from "./projectList";

const Projects = () => {
    const [showAllProjects, setShowAllProjects] = useState(false);

    const toggleProjects = () => {
        setShowAllProjects(!showAllProjects);
    };

    const displayedProjects = showAllProjects ? projectList : projectList.slice(0, 3);

    return (
        <div id="projects" className="projects">
            <h1>PROJECTS</h1>
            {displayedProjects.map((project, index) => (
                <div 
                    className="project-card" 
                    key={index}
                    style={{ 
                        animationDelay: "500ms" 
                    }}
                >
                    <div 
                        className="project-card-left"
                        style={{ 
                            animationDelay: "500ms"
                        }}
                    >
                        <img src={project.image} alt="project image not available" />
                    </div>
                    <div 
                        className="project-card-right"
                        style={{ 
                            animationDelay: "500ms"
                        }}
                    >
                        <h3>{project.title}</h3>
                        <p>{project.summary}</p>
                        <a href={project.link}><ButtonLight text="View Repository" /></a>
                    </div>
                </div>
            ))}
            {projectList.length > 3 && (
                <div className="toggle-button" onClick={toggleProjects}>
                    <ButtonLight text={showAllProjects ? "Show Less" : "Show More"} />
                </div>
            )}
        </div>
    );
};

export default Projects;
