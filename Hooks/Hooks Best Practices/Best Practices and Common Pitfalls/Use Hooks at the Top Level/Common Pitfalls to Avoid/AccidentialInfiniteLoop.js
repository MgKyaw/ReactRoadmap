// 2. Accidental Infinite Loops

import React, { useEffect, useState } from 'react';

function fetchData() {
  // Fetch data from API
}

function DataFetcher() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(); // Bug: Missing dependency causing infinite loop
  }, []); // Fix: Include fetchData in the dependency array

  return <div>{/* Display fetched data */}</div>;
}

export default DataFetcher;
