import React, { useState, useRef } from 'react';

const Contact = () => {



    return (
        <div id="contact" className='section border-box'>
            <div className="about-text">
                <h2><i className="fas fa-angle-down chevron" /><span className="bright-blue">.contact</span> {'{'} </h2>
                <div className="bio">

                    <p>Does your website need a face-lift? Need help wrangling your database schema? Is your developer team one person short of joining the kickball league? Shoot me a message and we'll grab a socially-distant coffee over Zoom <span role="img" aria-label="thumbs up">&#x1F44D;</span></p>


                    <div className="contact-container">
                        <div className='contactInfo home-div'>
                            <div className="skill border-box ">
                                <i className="fa fa-home yellow"></i> Minneapolis, MN | Remote
                                        </div>
                        </div>
                        <div className="contactInfo">


                            <a href="https://github.com/tatek1993" className="skill border-box contact-gh"> <i className="fab fa-github" aria-label="Github"></i> github.com/tatek1993 </a>


                            <a href="https://twitter.com/MoctezumaTate" className="skill border-box contact-twtr"><i className="fab fa-twitter bright-blue" aria-label="Twitter"></i> @MoctezumaTate </a>


                            <a href="https://www.linkedin.com/in/tate-keller-16ab7a183/" className="skill border-box contact-lnk"><i className="fab fa-linkedin blue" aria-label="Linkedin"></i> tate-keller-moctezuma </a>


                            <a href="mailto:tatekelleratwork@gmail.com" className="skill border-box contact-mail"><i className="fa fa-envelope red" aria-label="Email"></i> tatekelleratwork@gmail.com </a>
                        </div>

                    </div>


                </div>
                <h2>{'}'} </h2>
            </div>

            {/* <ul class="copyright">
                <li>&copy; Tate Keller Moctezuma. All rights reserved.</li>
            </ul> */}
        </div>





    );
};
export default Contact;