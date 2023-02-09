// import axios from 'axios';
// import React, { useState, useEffect  } from 'react';
// import { Form } from 'react-bootstrap';
// import BeachCard from '../BeachCard';

// export default function Beaches() {
//   const [searchInput, setSearchInput] = useState('');
//   const [APIData, setAPIData] = useState([]);
//   const [filteredResults, setFilteredResults] = useState([]);

//   useEffect(() => {
//       axios.get(`/api/v1/beaches`)
//           .then((response) => {
//               setAPIData(response.data);
//           })
//   }, [])

//   const searchItems = (searchValue) => {
//     setSearchInput(searchValue)
//     if (searchInput !== '') {
    // const filteredData = APIData.filter((item) => {
    //         return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
    //     })
//         console.log(filteredData)
//         setFilteredResults(filteredData)
//     } else {
//         setFilteredResults(APIData)
//       }
//   }

//   return (
//     <div>
//       <Form className="d-flex mx-4">
//         <Form.Control
//           icon="search"
//           type="search"
//           placeholder='Search a location!'
//           onChange={(e) => searchItems(e.target.value)}
//           className="me-2"
//           aria-label="Search"
//         />
//       </Form>

//         {searchInput.length > 1 ? (
//           filteredResults.map((item) => {
//             return (
//               <BeachCard name={item.name} description={item.description} key={item.id}>
//               </BeachCard>
//             )
//           })
//         ) : (
//           APIData.map((item) => {
//               return (

//                 <BeachCard name={item.name} description={item.description} key={item.id}>
//                 </BeachCard>
//               )
//           })
//       )}
//     </div>
//   )


// }
import React, {useState, useEffect} from 'react';
import BeachCard from '../BeachCard'
import axios from 'axios';


const Beaches = ({ searchResults }) => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    if (searchResults.length > 0) {
      setApiData(searchResults);
    } else {
      const fetchData = async () => {
        const response = await axios.get(`api/v1/beaches`);
        setApiData(response.data);
    };
    fetchData();
    }
  }, [searchResults]);

  return (
    <div className="beaches">
      <h2>Results</h2>
      {apiData.length > 0 ?(
        <ul>
          {apiData.map((result) => (
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
