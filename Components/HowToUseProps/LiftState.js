import * as React from 'react';

const App = () => {
  const [greeting, setGreeting] = React.useState('Welcome to React');
  const [isShow, setShow] = React.useState(true);

  const handleChange = (event) => {
    setGreeting(event.target.value);
  };

  const handleToggle = () => {
    setShow(!isShow);
  };

  return (
    <div>
      <Button label="Toggle" onClick={handleToggle} />

      <input type="text" value={greeting} onChange={handleChange} />

      {isShow ? <Welcome text={greeting} /> : null}
    </div>
  );
};

const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick} type="button">
      {label}
    </button>
  );
};

const Welcome = ({ text }) => {
  return <h1>{text}</h1>;
};

export default App;