import React from 'react';
import P5Sketch from './p5-sketch'; // Import your P5Sketch component
import FadeInSection from './FadeIn';

const Home = () => {
  return (
    <div id="home-content">
      {/* Cube above the text */}
      <P5Sketch />

      {/* Text content */}
      <div className="typewriter">
        <span><p className="text">hello, I'm <span className='intro'> Stuart. </span></p></span>
      </div>

      <FadeInSection>
        <div className='home-bio'>
          <h2>I am passionate about programming, with a focus on front-end web and game development. 
            My background as an IT technician has honed my troubleshooting and system optimization
             skills, fueling my enthusiasm for creating engaging user experiences in software applications.</h2>
        </div>
      </FadeInSection>

    <FadeInSection>
    <div className='button'>
        <a href='mailto:sjbutcher30@gmail.com'>Email Me<i class='bx bxs-smile' ></i></a>
      </div>
    </FadeInSection>
      

    </div>
    
   
  );
};

export default Home;
