import React, {useState, useEffect} from 'react';
import BeachCard from '../BeachCard'
import axios from 'axios';


const Beaches = ({ searchResults }) => {
  const [apiData, setApiData] = useState([]);


  useEffect(() => {
    if (searchResults.length > 0) {
      setApiData(searchResults);
    } else {
      axios.get(`/api/v1/beaches`)
        .then((response) => {
          setApiData(response.data);
        })
    }
  }, [searchResults]);

  return (
    <div className="beaches">
      <h2>Results</h2>
      {searchResults.length > 0 ?(
        <ul>
          {apiData.map((result) => (
            <BeachCard
              key={result.id}
              name={result.name}
              description={result.description}
              parking={result.parking}
              bbq_friendly={result.bbq_friendly}
              reviews={result.reviews}>

            </BeachCard>
          ))}
      </ul>
      ) : (
        <div>
          <ul>
            {apiData.map((result) => (
              <BeachCard
                key={result.id}
                name={result.name}
                description={result.description}
                parking={result.parking}
                bbq_friendly={result.bbq_friendly}
                reviews={result.reviews}>
              </BeachCard>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
};

export default Beaches;
