import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

export default function BeachSearch() {
  const [searchInput, setSearchInput] = useState('');
  const [APIData, setAPIData] = useState([])
  const [filteredResults, setFilteredResults] = useState([]);
    useEffect(() => {
        axios.get(`/api/v1/beaches`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    if (searchInput !== '') {
    const filteredData = APIData.filter((item) => {
            return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
        })
        setFilteredResults(filteredData)
    } else {
        setFilteredResults(APIData)
      }
  }

  return (
    <div style={{ padding: 20 }}>
        <input icon='search'
            placeholder='Search a location!'
            onChange={(e) => searchItems(e.target.value)}>
        </input>

        {searchInput.length > 1 ? (
          filteredResults.map((item) => {
            return (
              <Card>
                {item.name}
                {item.description}
              </Card>
            )
          })
        ) : (
          APIData.map((item) => {
              return (
                  <Card>
                    {item.name}
                    {item.description}
                  </Card>
              )
          })
      )}
    </div>
  )
}
