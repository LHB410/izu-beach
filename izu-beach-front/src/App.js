import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import { Container, Navbar } from 'react-bootstrap';
import { Homepage } from './components/Homepage/Homepage';
import { About } from './components/About/About'

function App() {
  return (
    <div className="App">
      <Container>
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/about">About</Link>
          </Container>
        </Navbar><br />

        <header className="App-header">
          <p className="App-logo">🏖️</p>
          <h1>Beaches in Izu!</h1>
        </header>
      </Container>

    {/* below is routing example */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
