import React from 'react';

const App = () => {
  const sayHello = () =>
    setTimeout(() => console.log('Hello'), 1000);

  return <Button handleClick={sayHello} />;
};

const Button = ({ handleClick }) => (
  <button type="button" onClick={handleClick}>
    Button
  </button>
);

export default App;
