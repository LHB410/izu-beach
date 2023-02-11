import React, {useState, useEffect} from 'react';
import BeachCard from '../BeachCard'
import axios from 'axios';


const Beaches = ({ searchResults }) => {
  const [apiData, setApiData] = useState([]);


  useEffect(() => {
    if (searchResults !== '') {
      setApiData(searchResults);
    } else {
       axios.get(`/api/v1/beaches`)
        .then((response) => {
            setApiData(response.data);
        })
    }
  }, []);

  return (
    <div className="beaches">
      <h2>Results</h2>
      {searchResults.length > 0 ?(
        <ul>
          {searchResults.map((result) => (
            <BeachCard
              key={result.id}
              name={result.name}
              description={result.description}>

            </BeachCard>
          ))}
      </ul>
      ) : (
        <div>No Results Found</div>
      )}

    </div>
  );
};

export default Beaches;
