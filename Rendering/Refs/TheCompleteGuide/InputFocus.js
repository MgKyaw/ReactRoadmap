// import { useRef, useEffect } from 'react';

// function InputFocus() {
//   const inputRef = useRef();

//   useEffect(() => {
//     inputRef.current.focus();
//   }, []);

//   return (
//     <input 
//       ref={inputRef} 
//       type="text" 
//     />
//   );
// }

import { useRef, useEffect } from 'react';

function InputFocus() {
  const inputRef = useRef();

  useEffect(() => {
    // Logs `HTMLInputElement` 
    console.log(inputRef.current);

    inputRef.current.focus();
  }, []);

  // Logs `undefined` during initial rendering
  console.log(inputRef.current);

  return <input ref={inputRef} type="text" />;
}