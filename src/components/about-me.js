import React from 'react';

const About = (props) => {

    return (

        <div id="about-me" className='about border-box'>
            <div className="about-text">
                <h2><i class="fas fa-angle-down chevron" /><span className="green">.bio</span> {'{'} </h2>
                <p className="bio">
                    Hello there, my name is Tate Keller-Moctezuma. I'm a front end web developer in Minneapolis, MN specializing in React. I have a passion for writing clean, well-commented code and creating accessible user experiences that don't sacrifice style for function.
                </p>
                <h2>{'}'} </h2>
            </div>


        </div>
    );
}
export default About;