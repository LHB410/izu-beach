import './App.scss';
import { Routes, Route } from 'react-router-dom'
import { Homepage } from './components/Homepage/Homepage';
import { About } from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import Beaches from './components/Beaches/Beaches';
import React from 'react';

function App() {

  return (
    <div className="App">
        <Navbar />

    {/* below is routing example */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/beaches" element={<Beaches />} />
      </Routes>
    </div>
  );
}

export default App;
