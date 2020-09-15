import React, { useState, useRef, useEffect } from 'react';

const Skills = () => {


    const skills = [
        {
            name: "Javascript",
            categories: ['frontend', 'backend']
        }
    ];

    return (
        <div className='skills'>
            {
                skills.filter(x => x.categories.includes(selectedCategory))
                    .map(x => (<span className="skill highlighted">{x.name}</span>))
            }
            {
                skills.filter(x => !x.categories.includes(selectedCategory))
                    .map(x => (<span className="skill gray">{x.name}</span>))
            }
        </div>
    );
};