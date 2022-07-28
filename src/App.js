import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Tours from './components/tours/Tours';
import Reviews from './components/reviews/Reviews';
import Read from './components/read/Read';
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Update from './components/crud/Update'
import Delete from './components/crud/Delete'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/tours" element={ <Tours /> } />
        <Route exact path="/reviews" element={ <Reviews /> } /> 
        <Route exact path="/footer" element={ <Footer /> } /> 
        <Route exact path="/read" element={ <Read /> } /> 
        <Route path="/update" element={ <Update /> } /> 
        <Route path="/delete" element={ <Delete /> } />         
      </Routes>
    </Router>
  );
}

export default App;
