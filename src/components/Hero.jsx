import React from 'react';
import './Hero.css';
import heroBookImg from '../assets/hero-book.jpg'; 

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2 className="author-name">MAGNUS STAR</h2>
        <h1>
          Stories from the <br />
          <span className="highlight">Edge of Space</span>
        </h1>
        <p>
          Author of the "Event Horizon" saga. <br />
          Writing the future, one star at a time.
        </p>
        
        <div className="hero-btns">
          <a href="#books" className="btn-filled">BROWSE BOOKS</a>
          <a href="#bio" className="btn-outline">MEET THE AUTHOR</a>
        </div>
      </div>

      <div className="hero-book-showcase">
        
        
        <div className="book-card">
          <img src={heroBookImg} alt="Magnus Star Book" />
          <div className="book-badge">New Release</div>
          
          
          <div className="book-details">
            <h3>THE EVENT HORIZON</h3>
            <span className="price">₹550</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;