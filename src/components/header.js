import React, { useState, useRef, useEffect } from 'react';
import image from '../images/tate-keller-1.jpg';
import { Link } from "react-router-dom";
import * as All from '../../node_modules/@fortawesome/fontawesome-free/css/all.css';

import Typed from 'typed.js';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const headerIntro = useRef();

    useEffect(() => {

        var typed = new Typed(headerIntro.current, {
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

    return (

        <div className="header">
            <div className="header-text-container">
                <div>
                    <h1 className="name"> Hi, I'm <span className="tate" >{'{'}</span> Tate <span className="tate" >{'}'}</span>.</h1>
                    <div className='header-text' >
                        <div className="header-typed">
                            <span ref={headerIntro} />

                        </div>
                    </div>
                </div>

                <div class="dropdown border-box">
                    <div class="dropbtn"><i class="fas fa-angle-down" /> <i class="fas fa-folder icon" /> Portfolio</div>
                    <div class="dropdown-content">
                        <a href="#about-me"><i class="fab fa-python blue" /> About Me</a>
                        <a href="#skills"><i class="fab fa-js-square yellow" /> Skills</a>
                        <a href="#projects"><i class="fab fa-css3 purple" /> Projects</a>
                        <a href="#contact"><i class="fas fa-code-branch red" /> Contact</a>
                    </div>
                </div>
            </div>

            <header >
                <img src={image} className="Main-image" alt="Tate Keller" />
            </header>
        </div >

    );
}
export default Header;