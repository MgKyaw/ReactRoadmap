const Form = ({ buttonColor, onSubmit }) => {
  const [username, setUsername] = useState('');

  return (
    <form
      onSubmit={event => {
        onSubmit(username);
        event.preventDefault();
      }}
    >
      <label>
        Your name:
        <input
          type="text"
          value={username}
          onChange={event => setUsername(event.target.value)}
        />
      </label>

      <button
        style={{ backgroundColor: buttonColor }}
        type="submit"
      >
        Send
      </button>
    </form>
  );
};
