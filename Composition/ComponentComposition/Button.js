const Button = ({ onClick, type = 'button', children }) => (
  <button type={type} onClick={onClick}>
    {children}
  </button>
);