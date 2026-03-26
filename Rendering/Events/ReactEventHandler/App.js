// import React from 'react';

// function App() {
//   function handleClick() {
//     console.log('Button click ...');
//   }

//   return (
//     <div>
//       <button type="button" onClick={handleClick}>
//         Event Handler
//       </button>
//     </div>
//   );
// }

import React from 'react';

function App() {
  function handleClick() {
    console.log('Button click ...');
  }

  // don't do this
  return (
    <div>
      <button type="button" onClick={handleClick()}>
        Event Handler
      </button>
    </div>
  );
}