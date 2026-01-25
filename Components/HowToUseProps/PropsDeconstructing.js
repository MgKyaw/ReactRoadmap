import * as React from 'react';

const App = () => {
  const greeting = 'Welcome to React';

  return (
    <div>
      <Welcome text={greeting} />
    </div>
  );
};

const Welcome = ({ text }) => {
  return <h1>{text}</h1>;
};

export default App;
