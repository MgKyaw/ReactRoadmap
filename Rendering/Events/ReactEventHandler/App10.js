import React from 'react';

function App() {
  const [count, setCount] = React.useState(0);

  function handleCount(event, delta) {
    setCount(count + delta);
  }

  return (
    <div>
      Count: {count}

      <button type="button" onClick={event => handleCount(event, 1)}>
        Increase Count
      </button>
      <button type="button" onClick={event => handleCount(event, -1)}>
        Decrease Count
      </button>
    </div>
  );
}