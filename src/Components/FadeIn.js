import React, { useState, useRef, useEffect } from 'react';
import '../App.css'; // Correctly import App.css from the parent directory

const FadeInSection = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Set visible when in view
          } else {
            setIsVisible(false); // Reset visibility when out of view
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Start observing the element
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current); // Cleanup observer on unmount
      }
    };
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? 'visible' : ''}`} // Apply class based on visibility
      ref={sectionRef}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
