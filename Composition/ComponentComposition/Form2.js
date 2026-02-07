const Form = ({ label, buttonLabel, buttonColor, onSubmit }) => {
  const [value, setValue] = useState('');

  return (
    <form
      onSubmit={event => {
        onSubmit(value);
        event.preventDefault();
      }}
    >
      <label>
        {label}
        <input
          type="text"
          value={value}
          onChange={event => setValue(event.target.value)}
        />
      </label>

      <button
        style={{ backgroundColor: buttonColor }}
        type="submit"
      >
        {buttonLabel}
      </button>
    </form>
  );
};
