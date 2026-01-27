import * as React from 'react';

const App = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <Button onClick={() => setCount(count + 1)}>
        {count}
      </Button>
    </div>
  );
};

const Button = ({ onClick, children }) => (
  <button onClick={onClick}>{children}</button>
);

export default App;