import axios from 'axios';
import React, { useState, useEffect  } from 'react';
import SearchBar from '../Homepage/SearchBar';
import BeachCard from '../BeachCard';

export default function Beaches() {
  const [searchInput, setSearchInput] = useState('');
  const [APIData, setAPIData] = useState([]);
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
        console.log(filteredData)
        setFilteredResults(filteredData)
    } else {
        setFilteredResults(APIData)
      }
  }

  return (
    <div>
        <SearchBar searchItems={searchItems}/>

        {searchInput.length > 1 ? (
          filteredResults.map((item) => {
            return (
              <BeachCard name={item.name} description={item.description} key={item.id}>
              </BeachCard>
            )
          })
        ) : (
          APIData.map((item) => {
              return (

                <BeachCard name={item.name} description={item.description} key={item.id}>
                </BeachCard>
              )
          })
      )}
    </div>
  )


}
