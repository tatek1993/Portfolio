import React, { useState, useRef } from 'react';
import Canary from '../images/pig.gif';
import Nav from '../images/nav.gif';
import Gol from '../images/gol.gif';
import Docs from '../images/apidocs.png';


const Projects = () => {


    const toolColors = {
        "React": "bright-blue-bg",
        "CSS": "orange-bg",
        "HTML": "red-bg",
        "HTML Canvas": "red-bg",
        "Node.js": "green-bg",
        "Express": "orange-bg",
        "Knex.js": "red-bg",
        "SQLITE3": "green-bg",
        "JavaScript": "yellow-bg",
        "SVG Animation": "purple-bg"

    };

    const projects = [
        {
            image: Canary,
            title: "Canary Animation Test",
            role: "Front End | Designer",
            description: "A sample layout and animation mock-up for the marketing page of an investing/crowdfunding app.",
            tools: ['React', 'CSS', 'HTML', 'SVG Animation'],
            github: "https://github.com/tatek1993/Canary-Animation-WIP"
        },
        {
            image: Nav,
            title: "Animated Navbar Test",
            role: "Front End | Designer",
            description: "A simple mock-up of an animated navigation bar, created for a self-directed collaborative project.",
            tools: ['JavaScript', 'CSS', 'HTML', 'SVG Animation'],
            github: "https://github.com/tatek1993/nav-bubble-test"
        },
        {
            image: Gol,
            title: "Game Of Life",
            role: "Front End",
            description: "An interactive in-browser version of Conway's Game Of Life made using HTML Canvas.",
            tools: ['React', 'CSS', 'HTML Canvas'],
            github: "https://github.com/tatek1993/Game-Of-Life"
        },
        {
            image: Docs,
            title: "Medical Cabinet Back End",
            role: "Back End",
            description: "A Node.js and Express restful API for a web application which recommends medical cannabis strains to patients.",
            tools: ['Node.js', 'Express', 'Knex.js', 'SQLITE3'],
            github: "https://github.com/tatek1993/medical-cabinet-back-end"
        },
    ]


    return (
        <div id="projects" className="section box-shadow projects">
            <h2><i className="fas fa-angle-down chevron" /><span className="red">.projects</span> {'{'} </h2>
            <div className='projects-section' style={{ display: 'flex', flexWrap: 'wrap' }}>
                {
                    projects.map(x => (
                        <div key={x.title} className="project-container">
                            <div className={`project box-shadow`}>
                                <div className="project-header">
                                    <img src={x.image} />
                                    <h2 className="project-title">
                                        <span className="yellow">[</span> {x.title} <span className="yellow">]</span >
                                    </h2>
                                </div>
                                <div className="project-description">
                                    <div>
                                        <p style={{ fontWeight: 'bold' }}>{x.role}</p>
                                        <p>{x.description}</p>
                                    </div>
                                    <div className='tools' style={{ flexWrap: 'wrap' }}>
                                        {x.tools.map(tool => (<div key={tool} className={`skill border-box ${toolColors[tool]}`}>{tool} </div>))}
                                    </div>
                                    <a href={x.github}><i className="fab fa-github" style={{ fontSize: 'calc(15px + 1vmin)' }} /> {x.github.replace('https://github.com/', '')}</a>
                                </div>
                            </div>
                        </div>))
                }
            </div>
            <h2>{'}'} </h2>
        </div>
    );
};
export default Projects;