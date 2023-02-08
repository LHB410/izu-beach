import './App.scss';
import { Routes, Route, Link } from 'react-router-dom'
import { Container, Navbar, Nav, Form } from 'react-bootstrap';
import { Homepage } from './components/Homepage/Homepage';
import { About } from './components/About/About';
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
            <Form className="d-flex mx-4">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
            <Nav
              className="my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/" className="mx-4">Beaches</Nav.Link>
              <Nav.Link href="/about" className="mx-4">About</Nav.Link>
              <Nav.Link href="/contribute" disabled className="mx-4">Contribute</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

        <header className="App-header">
          <p className="App-logo">🏖️</p>
          <h1>Beaches in Izu!</h1>
        </header>

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
