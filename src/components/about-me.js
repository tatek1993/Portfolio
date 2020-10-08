import React from 'react';

const About = (props) => {

    return (

        <div id="about-me" className='section border-box'>
            <div className="about-text">
                <h2><i class="fas fa-angle-down chevron" /><span className="green">.bio</span> {'{'} </h2>
                <p className="bio">

                    <h3>Hello there, my name is Tate Keller-Moctezuma. </h3>

                    I'm a creative designer who's in it for the Aha! moments, spurred on when I can improve and simplify a solution at the same time. I enjoy breaking down the relationships between users and the web services they interact with to give my designs a more natural flow.

                    <br />
                    When I'm not coding or brainstorming side projects, you can find me gardening, painting, and playing tug-of-war with my dog.

                </p>
                <h2>{'}'} </h2>
            </div>


        </div>
    );
}
export default About;