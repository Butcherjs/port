import React from 'react';
import Header from './Header';
import Home from './Home';
import About from './About';
import Experience from './Experience';
import Footer from './footer'; // Import the Footer component
import P5Sketch from './p5-sketch';

const PortfolioPage = () => {
    return (
      <div className = "app">
        <Header />
        <div className = "body-content">
      
        <Home />
        <About />
        <Experience/>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
  );
};

export default PortfolioPage;