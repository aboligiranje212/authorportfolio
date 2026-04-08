import React from 'react';
import './Bio.css';
import authorImg from '../assets/author.jpg'; 

const Bio = () => {
  return (
    <section className="bio-section" id="bio">
      <div className="bio-container">
        
        <div className="bio-image">
          <img src={authorImg} alt="Magnus Star" />
          <div className="image-accent-box"></div>
        </div>

        <div className="bio-content">
          <span className="bio-subtitle">Profile</span>
          <h2>MAGNUS STAR</h2>
         <p>
          Magnus Star writes science fiction books about deep space. 
           He loves telling stories about astronauts and the scary things they might find 
            in the dark. He tries to make his books feel real, focusing on the 
            dangerous side of exploring the universe.
        </p>
          <div className="stats-row">
            <div className="stat">
              <span className="stat-number">12</span>
              <span className="stat-label">Bestsellers</span>
            </div>
            <div className="stat">
              <span className="stat-number">5M+</span>
              <span className="stat-label">Readers</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Bio;