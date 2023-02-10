import './App.scss';
import { Routes, Route, useNavigate } from 'react-router-dom'
import Homepage from './components/Homepage/Homepage';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import Beaches from './components/Beaches/Beaches';
import { useState } from 'react';


function App() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="App">
      <Navbar  setSearchResults={setSearchResults}/>
    {/* below is routing example */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/beaches" element={<Beaches searchResults={searchResults} />} />
      </Routes>
    </div>
  );
}

export default App;
