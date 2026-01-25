import * as React from 'react';

const App = () => {
  const [greeting, setGreeting] = React.useState('Welcome to React');

  const handleChange = (event) => {
    setGreeting(event.target.value);
  };

  return (
    <div>
      <Button label="Toggle" />

      <input type="text" value={greeting} onChange={handleChange} />

      {isShow ? <Welcome text={greeting} /> : null}
    </div>
  );
};

const Button = ({ label }) => {
  const [isShow, setShow] = React.useState(true);

  const handleToggle = () => {
    setShow(!isShow);
  };

  return (
    <button onClick={handleToggle} type="button">
      {label}
    </button>
  );
};

const Welcome = ({ text }) => {
  return <h1>{text}</h1>;
};

export default App;