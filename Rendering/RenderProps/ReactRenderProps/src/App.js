import React, { Component } from 'react';

// const App = () => (
//   <div>
//     <h1>Currency Converter</h1>
//   </div>
// );

// const App = () => (
//   <Amount>
//     <Pound amount={amount} />
//     <Euro amount={amount} />
//   </Amount>
// );

const App = () => (
  <Amount>
    {() => (
      <div>
        <Pound amount={amount} />
        <Euro amount={amount} />
      </div>
    )}
  </Amount>
);

export default App;