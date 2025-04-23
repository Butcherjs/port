import React from 'react';
import FadeInSection from './FadeIn';

const About = () => {
  return (

    <FadeInSection>
      <div id="About">
        <div className="about-header">
          <h2>/ about me</h2>


        </div>

        <div className='about-content'>

          <div className='about-description'>
            <p> 
            I attended <span className='schools'><b>Castries Comprehensive School </b></span>  & <span className='schools'> <b> The Sir Athur Lewis Community College. </b></span>I’m passionate about programming, particularly in front-end web development and game development.
            I’m constantly learning and improving my skills, especially in back-end web development,
             to become a more well-rounded developer.

            </p>
            Here are technologies I’ve worked with include:
              <FadeInSection>
              <ul className='tech-list'>
                <li>Luau</li>
                <li>React.js</li>
                <li>SQL</li>
                <li>HTML & CSS</li>
                <li>Microsoft Access</li>
                <li>Hardware Troubleshooting</li>
            </ul>
            </FadeInSection>
            Outside of work, I love watching sports with my family, where our rival team loyalties spark lively debates. I also enjoy playing video games as a hobby. <i class='bx bxs-smile' ></i>
          </div>
        </div>


      </div>
    </FadeInSection>



  );
};



export default About;