import React from 'react';
import { Link } from 'react-router-dom'
import { Container, Nav} from 'react-bootstrap';


export default function Navbar() {
  return (
    <div className="navbar">
      <Container fluid>
        <Link className="nav-link" to="/"><h2>🏖️</h2></Link>
        {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
        {/* <Navbar.Collapse id="navbarScroll" className="justify-content-end"> */}
          <Nav
            className="my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/beaches" className="mx-4">Beaches</Nav.Link>
            <Nav.Link href="/about" className="mx-4">About</Nav.Link>
            <Nav.Link href="/contribute" disabled className="mx-4">Contribute</Nav.Link>
          </Nav>
        {/* </Navbar.Collapse> */}
      </Container>
    </div>
  )
}
