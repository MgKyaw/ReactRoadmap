const App = () => {
  return (
    <div>
      <UsernameForm onSubmit={username => console.log(username)} />
      <UsernameForm onSubmit={username => console.log(username)} />
    </div>
  );
};

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
