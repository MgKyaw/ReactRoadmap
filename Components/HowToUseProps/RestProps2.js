import * as React from 'react';

const App = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <Button
        label={count}
        disabled={true}
        onClick={() => setCount(count + 1)}
      />
    </div>
  );
};

const Button = ({ label, disabled, onClick }) => (
  <button disabled={disabled} onClick={onClick}>
    {label}
  </button>
);

// const Button = ({ label, onClick, ...others }) => (
//   <button disabled={others.disabled} onClick={onClick}>
//     {label}
//   </button>
// );

// const Button = ({ label, onClick, ...others }) => (
//   <button onClick={onClick} {...others}>
//     {label}
//   </button>
// );

export default App;