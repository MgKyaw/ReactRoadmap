import * as React from 'react';

const App = () => {
  return (
    <div>
      <Welcome text="Welcome to React" />
    </div>
  );
};

const Welcome = (props) => {
  const { text } = props;
  return <h1>{text}</h1>;
};