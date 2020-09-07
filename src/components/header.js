import React, { useState, useRef, useEffect } from 'react';
import image from '../images/tate-keller-1.jpg';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import Typed from 'typed.js';

const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const headerIntro = useRef();

    useEffect(() => {

        var typed = new Typed(headerIntro.current, {
            strings: ["I'm a Minneapolis-based Python lover", "I'm a Minneapolis-based designer", "I'm a Minneapolis-based problem solver", "I'm a Minneapolis-based dad-joke connoisseur", "I'm a Minneapolis-based Web Developer"],
            smartBackspace: true,
            typeSpeed: 30,
        });
    }, [])





    return (

        <div className="header">
            <div>
                <h1> Hi, I'm Tate!</h1>
                <div className='header-text' >
                    <span ref={headerIntro}>
                    </span>
                </div>
            </div>
            <header >
                <img src={image} className="Main-image" alt="Tate Keller" />
            </header>
        </div >

    );
}
export default Example;
// <i class="fas fa-folder"></i>