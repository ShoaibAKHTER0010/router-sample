import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/home';
import About from './components/about';
import Skills from './components/skills';
import Reviews from './components/reviews';
import Contact from './components/contact';
import Navbar from './components/navbar';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
       
        <Routes >
          
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <About />
      <Skills />
      <Reviews />
      <Contact />
    </div>
  );
};

export default App;
