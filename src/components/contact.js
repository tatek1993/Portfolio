import React, { useState, useRef } from 'react';

const Contact = () => {



    return (
        <div id="contact" className='section border-box'>
            <div className="about-text">
                <h2><i class="fas fa-angle-down chevron" /><span className="blue">.contact</span> {'{'} </h2>
                <div className="bio">

                    <h3>Reach out if you'd like to discuss collaborating on projects, getting a custom page made, or if you just need a second set of eyes to look over your code.</h3>
                    <br></br>

                    <div className="contact-container">

                        <ul className="contactInfo">
                            <li className="skill border-box contact-home">
                                <i class="fa fa-home yellow"></i> Minneapolis, MN | Remote
                                        </li>
                            <li className="skill border-box contact-gh">
                                <a href="https://github.com/tatek1993"> <i class="fab fa-github"></i> My Github </a>
                            </li>
                            <li className="skill border-box contact-mail">
                                <a href="mailto:tatekelleratwork@gmail.com"><i class="fa fa-envelope red"></i> tatekelleratwork@gmail.com </a>
                            </li>
                            <li className="skill border-box contact-twtr">
                                <a href="https://twitter.com/MoctezumaTate"><i class="fab fa-twitter bright-blue"></i> @MoctezumaTate </a>
                            </li>
                            <li className="skill border-box contact-lnk">
                                <a href="https://www.linkedin.com/in/tate-keller-16ab7a183/"><i class="fab fa-linkedin blue"></i> My Linkedin </a></li>
                        </ul>

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