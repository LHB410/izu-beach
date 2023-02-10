import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import Hamburger from 'hamburger-react'
import {ReactComponent as ReactLogo} from '../../logo.svg';
import {  Link, useNavigate } from 'react-router-dom'
import axios from 'axios';


export default function Navbar({setSearchResults}) {
  const [ isOpen, setIsOpen ] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.get(`api/v1/beaches`);
    const filteredResults =(
      response.data.filter(result =>
        result.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    setSearchResults(filteredResults);
    navigate("/beaches");
  };

  return (
    <Nav className="navbar">
      <a href="/"><ReactLogo /></a>
      {/* <Nav.Link href="/"><img src="../../images/logo.png" alt="" /></Nav.Link> */}
       
        
      <div id="hamburger">
        <Hamburger rounded size={40} toggled={isOpen} toggle={() => setIsOpen(!isOpen)}/>
      </div>

      <div className={ isOpen ? "nav-menu expanded" : "nav-menu" }>
        <Form className="d-flex mx-4" onSubmit={handleSubmit}>
            <Form.Control
            icon="search"
            type="search"
            placeholder="Search a location!"
            className="me-2"
            aria-label="Search"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          </Form>
        <Nav.Link href="/beaches">Beaches</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/contribute" disabled >Contribute</Nav.Link>
      </div>
    </Nav>
  )
};
