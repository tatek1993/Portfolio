import React, { useState, useRef } from 'react';

const Skills = () => {

    const [selectedCategory, setSelectedCatagory] = useState('all');

    const skills = [
        {
            name: "JavaScript",
            categories: ['frontend', 'backend', 'all'],
            color: ['yellow-bg']
        },
        {
            name: "CSS",
            categories: ['frontend', 'design', 'all'],
            color: ['orange-bg']
        },
        {
            name: "HTML",
            categories: ['frontend', 'design', 'all'],
            color: ['red-bg']
        },
        {
            name: "Python",
            categories: ['backend', 'all'],
            color: ['blue-bg']
        },
        {
            name: "TypeScript",
            categories: ['frontend', 'backend', 'all'],
            color: ['bright-blue-bg']
        },
        {
            name: "LESS/SASS",
            categories: ['frontend', 'design', 'misc', 'all'],
            color: ['purple-bg']
        },
        {
            name: "React",
            categories: ['frontend', 'backend', 'all'],
            color: ['bright-blue-bg']
        },
        {
            name: "Jest",
            categories: ['frontend', 'backend', 'all'],
            color: ['red-bg']
        },
        {
            name: "NodeJS",
            categories: ['backend', 'all'],
            color: ['green-bg']
        },
        {
            name: "Express",
            categories: ['backend', 'all'],
            color: ['orange-bg']
        },
        {
            name: "SQL",
            categories: ['backend', 'all'],
            color: ['yellow-bg']
        },
        {
            name: "KnexJS",
            categories: ['backend', 'all'],
            color: ['red-bg']
        },
        {
            name: "SQLite3",
            categories: ['backend', 'all'],
            color: ['green-bg']
        },
        {
            name: "PostgreSQL",
            categories: ['backend', 'all'],
            color: ['blue-bg']
        },
        {
            name: "npm/yarn",
            categories: ['misc', 'all'],
            color: ['red-bg']
        },
        {
            name: "Bootstrap",
            categories: ['frontend', 'design', 'all'],
            color: ['purple-bg']
        },
        {
            name: "Reactstrap",
            categories: ['frontend', 'design', 'all'],
            color: ['green-bg']
        },
        {
            name: "Git",
            categories: ['misc', 'all'],
            color: ['orange-bg']
        },
        {
            name: "MaterialUI",
            categories: ['frontend', 'design', 'all'],
            color: ['bright-blue-bg']
        },
        {
            name: "React Testing Library",
            categories: ['frontend', 'all'],
            color: ['bright-blue-bg']
        },
        {
            name: "PgAdmin",
            categories: ['backend', 'all'],
            color: ['blue-bg']
        },
        {
            name: "Redux",
            categories: ['frontend', 'all'],
            color: ['purple-bg']
        },
        {
            name: "SVG Animation",
            categories: ['frontend', 'design', 'all'],
            color: ['yellow-bg']
        },
        {
            name: "bash",
            categories: ['misc', 'all'],
            color: ['green-bg']
        },
        {
            name: "Styled Components",
            categories: ['frontend', 'design', 'all'],
            color: ['orange-bg']
        },
        {
            name: "Markdown",
            categories: ['misc', 'all'],
            color: ['yellow-bg']
        }
    ];

    return (
        <div className="skills-section">

            <div className='skill-header'>
                <div className='left-spacer'></div>

                <div className={`tab box-shadow ${selectedCategory == 'all' ? 'active-tab' : ''}`}
                    style={{ zIndex: selectedCategory == 'all' ? 10 : 9 }}
                    onClick={() => setSelectedCatagory('all')}>
                    <i class="fas fa-file-alt bright-blue" /> Skills.txt
                </div>
                <div className={`tab box-shadow ${selectedCategory == 'frontend' ? 'active-tab' : ''}`}
                    style={{ zIndex: selectedCategory == 'frontend' ? 10 : 8 }}
                    onClick={() => setSelectedCatagory('frontend')}>
                    <i class="fab fa-js-square yellow" /> Fontend.js
                </div>
                <div className={`tab box-shadow ${selectedCategory == 'backend' ? 'active-tab' : ''}`}
                    style={{ zIndex: selectedCategory == 'backend' ? 10 : 7 }}
                    onClick={() => setSelectedCatagory('backend')}>
                    <i class="fab fa-python blue" /> Backend.py
                </div>
                <div className={`tab box-shadow ${selectedCategory == 'design' ? 'active-tab' : ''}`}
                    style={{ zIndex: selectedCategory == 'design' ? 10 : 6 }}
                    onClick={() => setSelectedCatagory('design')}>
                    <i class="fab fa-css3 purple" /> Design.css
                </div>
                <div className={`tab box-shadow ${selectedCategory == 'misc' ? 'active-tab' : ''}`}
                    style={{ zIndex: selectedCategory == 'misc' ? 10 : 5 }}
                    onClick={() => setSelectedCatagory('misc')}>
                    <i class="fab fa-npm red" /> Misc.json
                </div>

                <div className='right-spacer'></div>
            </div>
            <div className='skills box-shadow'>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {
                        skills.filter(x => x.categories.includes(selectedCategory))
                            .map(x => (<div className={`skill border-box alive ${x.color}`}>{x.name}</div>))
                    }
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {
                        skills.filter(x => !x.categories.includes(selectedCategory))
                            .map(x => (<div className="skill border-box dead">{x.name}</div>))
                    }
                </div>
            </div>
        </div >

    );
};
export default Skills;