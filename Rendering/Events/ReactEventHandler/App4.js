import React from 'react';

function App() {
  const [count, setCount] = React.useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      Count: {count}

      <button type="button" onClick={handleClick}>
        Increase Count
      </button>
    </div>
  );
}