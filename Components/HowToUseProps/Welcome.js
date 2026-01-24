import * as React from 'react';

const App = () => {
  return (
    <div>
      <Welcome />
    </div>
  );
};

const Welcome = () => {
  const greeting = 'Welcome to React';

  return <h1>{greeting}</h1>;
};

export default App;