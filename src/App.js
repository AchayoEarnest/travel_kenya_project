import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Tours from './components/tours/Tours';
import Reviews from './components/reviews/Reviews';
import Read from './components/read/Read';
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/tours" element={ <Tours /> } />
        <Route path="/reviews" element={ <Reviews /> } /> 
        <Route path="/footer" element={ <Footer /> } /> 
        <Route path="/read" element={ <Read /> } /> 

      </Routes>
    </Router>
  );
}

export default App;
