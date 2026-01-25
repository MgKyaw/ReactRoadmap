import * as React from 'react';

const App = () => {
  return (
    <div>
      <Welcome text="Welcome to React" />
    </div>
  );
};

const Welcome = ({ text }) => {
  return <h1>{text}</h1>;
};

export default App;