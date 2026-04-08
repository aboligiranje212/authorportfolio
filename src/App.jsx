import React from 'react';
import './App.css';

import Navbar from './components/Navbar'; 
import Hero from './components/Hero';
import Books from './components/Books';
import Bio from './components/Bio';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar /> 

      <main style={{ marginTop: '80px' }}>
        <Hero />
        <Books />
        <Bio />
        <Blog />
      </main>

      <Footer />
    </div>
  );
}

export default App;