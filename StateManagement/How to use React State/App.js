import React from 'react';

const App = () => {
  const [counter, setCounter] = React.useState(42);

  const handleClick = () => {
    setCounter(counter + 5);
  };

  return (
    <>
      <p>{counter}</p>

      <button type="button" onClick={handleClick}>
        Increase by 5
      </button>
    </>
  );
};