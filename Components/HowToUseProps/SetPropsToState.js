const User = ({ user, onUpdateName }) => {
  // derive initial state from props
  const [name, setName] = React.useState(user.name);

  function handleNameChange(event) {
    setName(event.target.value);
  }

  return (
    <li>
      {user.name}
      <input type="text" value={name} onChange={handleNameChange} />
      <button type="button" onClick={() => onUpdateName(user, name)}>
        Update
      </button>
    </li>
  );
}