import { Form } from "react-bootstrap"
import React from 'react';


function SearchBar({searchItems}) {

  return(
    <div>
      <Form className="d-flex mx-4">
        <Form.Control
          icon="search"
          type="search"
          placeholder='Search a location!'
          onChange={(e) => searchItems(e.target.value)}
          className="me-2"
          aria-label="Search"
        />
      </Form>
    </div>

  )
}

export default SearchBar
