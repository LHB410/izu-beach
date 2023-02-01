import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import { Homepage } from './components/Homepage';
import { Container, Navbar } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/about">About Me</Link>
          </Container>
        </Navbar><br />

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </Container>

    {/* below is routing example */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
