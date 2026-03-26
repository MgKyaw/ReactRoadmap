import React from 'react';

function App() {
  const handleClick = () => {
    console.log('Button click ...');
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Event Handler
      </button>
    </div>
  );
}