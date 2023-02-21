import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { Nav, Form } from 'react-bootstrap';
import Hamburger from 'hamburger-react'
import { ReactComponent as ReactLogo } from '../../logo.svg';
import axios from 'axios';


export default function Navbar({setSearchResults}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [ isOpen, setIsOpen ] = useState(false);
  const [ isMobileNav, setIsMobileNav ] = useState(false);
  const navigate = useNavigate();
  const mobileBreakpoint = 992;

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
    setIsOpen(!isOpen);
  };

  const handleIsOpen = () => {
    setIsOpen(!isOpen)
  };

  useEffect(() => {
    if (window.innerWidth > mobileBreakpoint) {
      setIsMobileNav(false);
    } else if (window.innerWidth < mobileBreakpoint) {
      setIsMobileNav(true);
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > mobileBreakpoint) {
        setIsMobileNav(false);
        setIsOpen(false);
      } else if (window.innerWidth < mobileBreakpoint) {
        setIsMobileNav(true);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  return (
    <Nav className="navbar">
      <a href="/"><ReactLogo /></a>

      <Form className="d-flex" id="nav-search" onSubmit={handleSubmit} >
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

      <div id="hamburger">
        <Hamburger rounded size={40} toggled={isOpen} toggle={handleIsOpen}/>
      </div>

      <div className={ isOpen && isMobileNav ? "nav-menu expanded" : "nav-menu" }>
        <Nav.Link as={Link} to="/beaches" onClick={handleIsOpen} >Beaches</Nav.Link>
        <Nav.Link as={Link} to="/about" onClick={handleIsOpen} >About</Nav.Link>
        <Nav.Link as={Link} to="/contribute" onClick={handleIsOpen} >Contribute</Nav.Link>
      </div>
    </Nav>
  )
}
