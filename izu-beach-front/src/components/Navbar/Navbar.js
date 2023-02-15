import {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { Nav, Form} from 'react-bootstrap';
import Hamburger from 'hamburger-react'
import {ReactComponent as ReactLogo} from '../../logo.svg';
import axios from 'axios';


export default function Navbar({setSearchResults}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [ isOpen, setIsOpen ] = useState(false);
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

      <div id="hamburger">
        <Hamburger rounded size={40} toggled={isOpen} toggle={() => setIsOpen(!isOpen)}/>
      </div>

      <div className={ isOpen ? "nav-menu expanded" : "nav-menu" }>

        <Form className="d-flex mx-4" id="nav-search" onSubmit={handleSubmit} >
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

        <Nav.Link as={Link} to="/beaches" onClick={() => setIsOpen(!isOpen)} >Beaches</Nav.Link>
        <Nav.Link as={Link} to="/about" onClick={() => setIsOpen(!isOpen)} >About</Nav.Link>
        <Nav.Link as={Link} to="/contribute" onClick={() => setIsOpen(!isOpen)} >Contribute</Nav.Link>
      </div>

    </Nav>
  )
}
