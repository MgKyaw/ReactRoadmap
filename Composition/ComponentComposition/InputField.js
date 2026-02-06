const UsernameForm = ({ onSubmit }) => {
  const [username, setUsername] = useState('');

  return (
    <Form
      onSubmit={event => {
        onSubmit(username);
        event.preventDefault();
      }}
    >
      <InputField value={username} onChange={setUsername}>
        Your name:
      </InputField>

      <Button type="submit">Send</Button>
    </Form>
  );
};

const Form = ({ onSubmit, children }) => (
  <form onSubmit={onSubmit}>{children}</form>
);

const Button = ({ onClick, type = 'button', children }) => (
  <button type={type} onClick={onClick}>
    {children}
  </button>
);

const InputField = ({ value, onChange, children }) => (
  <label>
    {children}
    <input
      type="text"
      value={value}
      onChange={event => onChange(event.target.value)}
    />
  </label>
);
