import React, { useState, useRef } from 'react';

const Contact = () => {



    return (
        <div className="projects border-box">
            <div class="contact">
                <div id="about-me" className='about border-box'>
                    <div className="about-text">
                        <h2><i class="fas fa-angle-down chevron" /><span className="blue">.contact</span> {'{'} </h2>
                        <div className="bio">

                            <h3>Reach out if you'd like to discuss collaborating on projects, getting a custom page made, or if you just need a second set of eyes to look over your code.</h3>
                            <br></br>

                            <div className="contact-container">

                                <ul className="contactInfo">
                                    <li className="skill border-box">
                                        <i class="fa fa-home"></i> Minneapolis, MN | Remote
                                        </li>
                                    <li className="skill border-box">
                                        <a href="https://github.com/tatek1993"> <i class="fab fa-github"></i> My Github </a>
                                    </li>
                                    <li className="skill border-box">
                                        <a href="mailto:tatekelleratwork@gmail.com"><i class="fa fa-envelope"></i> tatekelleratwork@gmail.com</a>
                                    </li>
                                    <li className="skill border-box">
                                        <a href="https://twitter.com/MoctezumaTate"><i class="fab fa-twitter"></i> @MoctezumaTate</a>
                                    </li>
                                    <li className="skill border-box">
                                        <a href="https://www.linkedin.com/in/tate-keller-16ab7a183/"><i class="fab fa-linkedin"></i> My Linkedin</a></li>
                                </ul>

                            </div>


                        </div>
                        <h2>{'}'} </h2>
                    </div>


                </div>

                <h2 class="contactTitle">Let's Work Together</h2>
                <div class="contactContainer">
                    <p>Reach out if you'd like to discuss collaborating on projects, getting a custom page made, or if you just need a second set of eyes to look over your code.</p>
                    <br></br>

                    <ul class="contactInfo">
                        <li >
                            <i class="fa fa-home"></i> Minneapolis, MN | Remote
                        </li>
                        <li >
                            <i class="fa fa-phone"></i> (xxx) xxx-xxxx
                        </li>
                        <li >
                            <a href="mailto:tatekelleratwork@gmail.com"><i class="fa fa-envelope"></i> tatekelleratwork@gmail.com</a>
                        </li>
                        <li >
                            <a href="https://twitter.com/MoctezumaTate"><i class="fab fa-twitter"></i>@MoctezumaTate</a>
                        </li>
                        <li ><a href="https://www.linkedin.com/in/tate-keller-16ab7a183/"><i class="fab fa-linkedin"></i> My Linkedin</a></li>
                    </ul>
                </div>
                <ul class="copyright">
                    <li>&copy; Tate Keller Moctezuma. All rights reserved.</li>
                </ul>
            </div>
        </div>
    );
};
export default Contact;