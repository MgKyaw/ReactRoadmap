import * as React from 'react';

const App = () => {
  return (
    <div>
      <Welcome text="Welcome to React" />
    </div>
  );
};

const Welcome = (props) => {
  return <h1>{props.text}</h1>;
};