import React from 'react';
import './Books.css';
import { BOOK_DATA } from '../data';

const Books = () => {

  return (
    <section className="books-section" id="books">
      <div className="section-header">
        <span className="subtitle">Incoming Transmissions</span>
        <h2>Classified Archives</h2>
      </div>

      <div className="books-grid">
        {BOOK_DATA.map((book) => (
          <div key={book.id} className="book-item">

            <div className="book-poster">
              <img src={book.image} alt={book.title} />

              {/* Simple Overlay - Direct Purchase Link */}
              <div className="book-overlay">
                <a 
                  href={book.buyLinks?.amazon || "#"} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="buy-btn"
                >
                  ACQUIRE COPY
                </a>
              </div>
            </div>

            <div className="book-info">
              <span className="book-tag">{book.tag || "Sci-Fi Thriller"}</span>
              <h3>{book.title}</h3>
              <p className="book-author">By {book.author}</p>
              <p className="book-price">{book.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Books;