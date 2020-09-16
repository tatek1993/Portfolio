import React, { useState, useRef } from 'react';

const Skills = () => {


    const [selectedCategory, setSelectedCatagory] = useState('all');



    const skills = [
        {
            name: "JavaScript",
            categories: ['frontend', 'backend', 'all']
        },
        {
            name: "CSS",
            categories: ['frontend', 'design', 'all']
        },
        {
            name: "HTML",
            categories: ['frontend', 'design', 'all']
        },
        {
            name: "Python",
            categories: ['backend', 'all']
        },
        {
            name: "TypeScript",
            categories: ['frontend', 'backend', 'all']
        },
        {
            name: "LESS/SASS",
            categories: ['frontend', 'design', 'misc', 'all']
        },
        {
            name: "React",
            categories: ['frontend', 'backend', 'all']
        },
        {
            name: "Jest",
            categories: ['frontend', 'backend', 'misc', 'all']
        },
        {
            name: "NodeJS",
            categories: ['backend', 'all']
        },
        {
            name: "Express",
            categories: ['backend', 'all']
        },
        {
            name: "SQL",
            categories: ['backend', 'all']
        },
        {
            name: "KnexJS",
            categories: ['backend', 'all']
        },
        {
            name: "SQLite3",
            categories: ['backend', 'all']
        },
        {
            name: "PostgreSQL",
            categories: ['backend', 'all']
        },
        {
            name: "npm/yarn",
            categories: ['misc', 'all']
        },
        {
            name: "Bootstrap",
            categories: ['frontend', 'design', 'all']
        },
        {
            name: "Reactstrap",
            categories: ['frontend', 'design', 'all']
        },
        {
            name: "Git",
            categories: ['misc', 'all']
        },
        {
            name: "MaterialUI",
            categories: ['frontend', 'design', 'all']
        }
    ];

    return (
        <div>
            <div className='skill-header'>
                <div onClick={() => setSelectedCatagory('all')}><i class="fas fa-file-alt bright-blue" /> All.txt</div>
                <div onClick={() => setSelectedCatagory('frontend')}><i class="fab fa-js-square yellow" /> Fontend.js</div>
                <div onClick={() => setSelectedCatagory('backend')}><i class="fab fa-python blue" /> Backend.py</div>
                <div onClick={() => setSelectedCatagory('design')}><i class="fab fa-css3 purple" /> Design.css</div>
                <div onClick={() => setSelectedCatagory('misc')}><i class="fab fa-npm red" /> Misc.json</div>
            </div>
            <div className='skills'>
                {
                    skills.filter(x => x.categories.includes(selectedCategory))
                        .map(x => (<div className="skill border-box alive">{x.name}</div>))
                }
                {
                    skills.filter(x => !x.categories.includes(selectedCategory))
                        .map(x => (<div className="skill border-box dead">{x.name}</div>))
                }
            </div>
        </div>

    );
};
export default Skills;