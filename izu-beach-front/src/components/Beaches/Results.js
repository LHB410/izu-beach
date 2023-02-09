import React from 'react';

const Results = ({ searchResults }) => {
  if (searchResults && searchResults.length > 0) {
    return (
      <div className="results">
        <h3>Search Results</h3>
        {searchResults.map((result, i) => (
          <div key={i}>
            <h4>{result.name}</h4>
            <p>{result.description}</p>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className="results">
        <h3>All Beaches</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
          felis vel lectus pellentesque gravida vel sed metus. Sed vitae metus
          ipsum.
        </p>
      </div>
    );
  }
};

export default Results;
