import React, { useState, useRef } from 'react';

const Contact = () => {



    return (
        <div id="contact" className='section border-box'>
            <div className="about-text">
                <h2><i class="fas fa-angle-down chevron" /><span className="bright-blue">.contact</span> {'{'} </h2>
                <div className="bio">

                    <h3>Does your website need a face-lift? Need help wrangling your database schema? Is your developer team one person short of joining the kickball league? Shoot me a message and we'll grab a socially-distant coffee over Zoom &#x1F44D;</h3>


                    <div className="contact-container">
                        <div className='contactInfo home-div'>
                            <div className="skill border-box ">
                                <i class="fa fa-home yellow"></i> Minneapolis, MN | Remote
                                        </div>
                        </div>
                        <div className="contactInfo">


                            <a href="https://github.com/tatek1993" className="skill border-box contact-gh"> <i class="fab fa-github" aria-label="Github"></i> github.com/tatek1993 </a>


                            <a href="https://twitter.com/MoctezumaTate" className="skill border-box contact-twtr"><i class="fab fa-twitter bright-blue" aria-label="Twitter"></i> @MoctezumaTate </a>


                            <a href="https://www.linkedin.com/in/tate-keller-16ab7a183/" className="skill border-box contact-lnk"><i class="fab fa-linkedin blue" aria-label="Linkedin"></i> tate-keller-moctezuma </a>


                            <a href="mailto:tatekelleratwork@gmail.com" className="skill border-box contact-mail"><i class="fa fa-envelope red" aria-label="Email"></i> tatekelleratwork@gmail.com </a>
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