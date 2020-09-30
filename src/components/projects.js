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
        "JavaScript": "yellow-bg"

    };

    const projects = [
        {
            image: Canary,
            title: "Canary Animation Test",
            description: "A sample layout and animation mock-up for the marketing page of an investing/crowdfunding app.",
            tools: ['React', 'CSS', 'HTML'],
            github: "https://github.com/tatek1993/Canary-Animation-WIP"
        },
        {
            image: Nav,
            title: "Animated Navbar Test",
            description: "A simple mock-up of an animated navigation bar, created for a self-directed collaborative project.",
            tools: ['JavaScript', 'CSS', 'HTML'],
            github: "https://github.com/tatek1993/nav-bubble-test"
        },
        {
            image: Gol,
            title: "Game Of Life",
            description: "An interactive in-browser version of Conway's Game Of Life made using HTML Canvas.",
            tools: ['React', 'CSS', 'HTML Canvas'],
            github: "https://github.com/tatek1993/Game-Of-Life"
        },
        {
            image: Docs,
            title: "Medical Cabinet Back End",
            description: "A Node.js and Express restful API for a web application which recommends medical cannabis strains to patients.",
            tools: ['Node.js', 'Express', 'Knex.js', 'SQLITE3'],
            github: "https://github.com/tatek1993/medical-cabinet-back-end"
        },
    ]


    return (
        <div id="projects" className="about box-shadow projects">
            <h2><i class="fas fa-angle-down chevron" /><span className="red">.projects</span> {'{'} </h2>
            <div className='projects-section' style={{ display: 'flex', flexWrap: 'wrap' }}>
                {
                    projects.map(x => (
                        <div className="project-container">
                            <div className={`project box-shadow`}>
                                <div className="project-header">
                                    <img src={x.image} />
                                    <h2 className="project-title">
                                        <span className="yellow">[</span> {x.title} <span className="yellow">]</span >
                                    </h2>
                                </div>
                                <div className="project-description">
                                    <p>{x.description}</p>
                                    <div className='tools'>
                                        {x.tools.map(tool => (<div className={`skill border-box ${toolColors[tool]}`}>{tool} </div>))}
                                    </div>
                                    <a href={x.github}><i class="fab fa-github" style={{ fontSize: 'calc(15px + 1vmin)' }} /> {x.github.replace('https://github.com/', '')}</a>
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