// src/components/Header.js

import React from 'react';

const Header = () => {
  return (
    <nav>

      <div className="header-content">
        <a className = "name" href='#'>Stuart Butcher</a>
        <div className= "nav-links">
            <a href = "#home-content"> Home</a>
            <a href = "#About"> About Me</a>
            <a href = "#Experience"> Skills & Experience</a>
        </div>
      </div>
      {/* <div classNameName="header-content">
        <a href="#" classNameName="name">Stuart Butcher</a>
        
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Experience</a>
        </div>

        <h1 className="title">Aspiring Software Programmer</h1>
      </div> */}
    </nav>
  );
};

export default Header;
