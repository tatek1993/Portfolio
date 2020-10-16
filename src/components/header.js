import React, { useState, useRef, useEffect } from 'react';
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css';

import Typed from 'typed.js';

const Header = (props) => {
    const headerIntro = useRef();

    useEffect(() => {

        new Typed(headerIntro.current, {
            strings: [
                "I'm a Minneapolis-based<br/>  <span class='red'>problem solver</span>,",
                "I'm a Minneapolis-based<br/>  <span class='purple'>designer</span>,",
                "I'm a Minneapolis-based<br/>  <span class='yellow'>Python lover</span>,",
                "I'm a Minneapolis-based<br/>  <span class='orange'>dad-joke connoisseur</span>,",
                "I'm a Minneapolis-based<br/>  <span class='green'>Web Developer</span>."],
            smartBackspace: true,
            startDelay: 1000,
            typeSpeed: 25,
        });
    }, [])

    const scrollToId = (id) => {
        const el = document.getElementById(id);
        if (el != null) {
            el.scrollIntoView({
                behavior: 'smooth', // smooth scroll
                block: 'start' // the upper border of the element will be aligned at the top of the visible part of the window of the scrollable area.
            })
        }
    }

    return (

        <div className="header">
            <div className="header-text-container">
                <div className="flying-header-text">
                    <h1 className="name"> Hi, I'm <span className="tate" >{'{'}</span> Tate <span className="tate" >{'}'}</span>.</h1>
                    <div className="mobile-image" alt="Tate Keller" />
                    <div className='header-text' >
                        <div className="header-typed">
                            <span ref={headerIntro} />

                        </div>
                    </div>
                </div>

                <div className="dropdown border-box">
                    <div className="dropbtn"><i className="fas fa-angle-down" /> <i className="fas fa-folder icon" /> Portfolio</div>
                    <div className="dropdown-content">
                        <button onClick={() => scrollToId('about-me')}><i className="fab fa-python blue" /> About Me</button>
                        <button onClick={() => scrollToId('skills')}><i className="fab fa-js-square yellow" /> Skills</button>
                        <button onClick={() => scrollToId('projects')}><i className="fab fa-css3 purple" /> Projects</button>
                        <button onClick={() => scrollToId('contact')}><i className="fas fa-code-branch red" /> Contact</button>
                    </div>
                </div>
            </div>

            <header >
                <img src='/portfolio-pic3.jpeg' className="Main-image" alt="Tate Keller" />
            </header>
        </div >

    );
}
export default Header;