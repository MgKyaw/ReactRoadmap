import * as React from 'react';

const App = () => {
  const greetingObject = { greeting: 'Welcome to React' };

  return (
    <div>
      <Welcome text={greetingObject} />
    </div>
  );
};

const Welcome = ({ text }) => {
  return <h1>{text.greeting}</h1>;
};

export default App;
