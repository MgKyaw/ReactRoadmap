import * as React from 'react';

const App = () => {
  return (
    <div>
      <Welcome text={{ greeting: 'Welcome to React' }} />
    </div>
  );
};

const Welcome = ({ text }) => {
  return <h1>{text.greeting}</h1>;
};

export default App;