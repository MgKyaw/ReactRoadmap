const App = () => {
  const onSubmit = username => console.log(username);

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

      <Button color="violet" type="submit">
        Send
      </Button>
    </Form>
  );
};

const Button = ({
  color = 'white',
  onClick,
  type = 'button',
  children,
}) => (
  <button
    style={{ backgroundColor: color }}
    type={type}
    onClick={onClick}
  >
    {children}
  </button>
);
