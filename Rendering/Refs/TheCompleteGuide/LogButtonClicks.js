// import { useRef } from 'react';

// function LogButtonClicks() {
//   const countRef = useRef(0);
  
//   const handle = () => {
//     countRef.current++;
//     console.log(`Clicked ${countRef.current} times`);
//   };

//   console.log('I rendered!');

//   return <button onClick={handle}>Click me</button>;
// }

import { useState } from 'react';

function LogButtonClicks() {
  const [count, setCount] = useState(0);
  
  const handle = () => {
    const updatedCount = count + 1;
    console.log(`Clicked ${updatedCount} times`);
    setCount(updatedCount);
  };

  console.log('I rendered!');

  return <button onClick={handle}>Click me</button>;
}