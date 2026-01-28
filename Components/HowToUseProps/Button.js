const Button = (onClick, children) => (
  <button onClick={onClick} type="button">
    {children}
  </button>
);