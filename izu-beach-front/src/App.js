import './App.scss';
import { Routes, Route, Link } from 'react-router-dom'
import { Container, Navbar, Nav} from 'react-bootstrap';
import { Homepage } from './components/Homepage/Homepage';
import { About } from './components/About/About';
import SearchBar from './components/Homepage/SearchBar';
import Beaches from './components/Beaches/Beaches';
import React from 'react';

// import { Navbar } from './components/Navbar/Navbar';


function App() {

  return (
    <div className="App">
      <Navbar className="Navbar">
        <Container fluid>
          {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
          <Link className="nav-link" to="/"><h2>🏖️</h2></Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <Nav
              className="my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/beaches" className="mx-4">Beaches</Nav.Link>
              <Nav.Link href="/about" className="mx-4">About</Nav.Link>
              <Nav.Link href="/contribute" disabled className="mx-4">Contribute</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

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
