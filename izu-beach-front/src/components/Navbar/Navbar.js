import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import Hamburger from 'hamburger-react'
import {ReactComponent as ReactLogo} from '../../logo.svg';


export default function Navbar() {
  const [ isOpen, setIsOpen ] = useState(false);

  return (
    <Nav className="navbar">
      <a href="/"><ReactLogo /></a>
      {/* <Nav.Link href="/"><img src="../../images/logo.png" alt="" /></Nav.Link> */}

      <Hamburger toggled={isOpen} toggle={() => setIsOpen(!isOpen)}/>

      <div className={ isOpen ? "nav-menu expanded" : "nav-menu" }>
        <Nav.Link href="/beaches">Beaches</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/contribute" disabled >Contribute</Nav.Link>
      </div>
    </Nav>
  )
}
