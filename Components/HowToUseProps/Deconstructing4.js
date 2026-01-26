import * as React from 'react';

const App = () => {
  return (
    <div>
      <Welcome text="Welcome to React" myColor="red" />
    </div>
  );
};

const Welcome = ({ text, myColor }) => {
  return <h1 style={{ color: myColor }}>{text}</h1>;
};