import React, { useState, useRef } from 'react';

const Projects = () => {

    const projects = [
        {
            image: ['yellow-bg'],
            title: "Game Of Life",
            description: "An interactive in-browser version of Conway's Game Of Life made using HTML Canvas.",
            github: "https://github.com/tatek1993/Game-Of-Life"
        },
        {
            image: ['yellow-bg'],
            title: "Medical Cabinet Back End",
            description: "A Node.js and Express restful API for the Medical Cabinet application, medical cannabis strain suggester.",
            github: "https://github.com/tatek1993/medical-cabinet-back-end"
        },
        {
            image: ['yellow-bg'],
            title: "Canary Animation Test",
            description: "A sample layout and animation mock-up for the marketing page of an investing/crowdfunding app.",
            github: "https://github.com/tatek1993/Canary-Animation-WIP"
        },
    ]


    return (
        <div className="about border-box">
            <h2><i class="fas fa-angle-down chevron" /><span className="red">.projects</span> {'{'} </h2>
            <div className="projects-list">
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {
                        projects.map(x => (<div className={`skill border-box  ${x.color}`}>
                            {x.title}<br></br>
                            {x.description}
                        </div>))
                    }
                </div>
            </div>


            <h2>{'}'} </h2>
        </div>
    );
};
export default Projects;