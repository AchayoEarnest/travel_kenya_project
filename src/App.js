import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Read from './components/read/Read';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/read" element={ <Read /> } /> 

      </Routes>
    </Router>
  );
}

export default App;
