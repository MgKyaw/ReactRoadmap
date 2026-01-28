const Button = (onClick, children) => (
  <button onClick={onClick} type="button">
    {children}
  </button>
);

const Button2 = ({ onClick, children }) => (
  <button onClick={onClick} type="button">
    {children}
  </button>
);

const Button3 = ({ onClick, children }) =>
  console.log(onClick, children) || (
  <button onClick={onClick} type="button">
    {children}
  </button>
);
