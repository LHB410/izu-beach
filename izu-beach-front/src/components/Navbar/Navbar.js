import {  Link, useNavigate } from 'react-router-dom'
import { Container, Nav, Form} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function Navbar({setSearchResults}) {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    if (searchQuery) {
      const fetchResults = async () => {
        const response = await axios.get(`api/v1/search?p=${searchQuery}`);
        setSearchResults(response.data);
        navigate("/beaches")
      };
      fetchResults();
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

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

            <Form className="d-flex mx-4">
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

            <Nav.Link as={Link} to="/beaches" className="mx-4">Beaches</Nav.Link>
            <Nav.Link as={Link} to="/about" className="mx-4">About</Nav.Link>
            <Nav.Link as={Link} to="/contribute" className="mx-4">Contribute</Nav.Link>

          </Nav>
        {/* </Navbar.Collapse> */}
      </Container>
    </div>
  )
};
