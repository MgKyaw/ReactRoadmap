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