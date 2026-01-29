function Item({ item, onUpdateName }) {
  // derive initial state from props
  const [name, setName] = React.useState(item.name + '!');

  function handleNameChange(event) {
    setName(event.target.value);
  }

  return (
    <li>
      {item.name}
      <input type="text" value={name} onChange={handleNameChange} />
      <button type="button" onClick={() => onUpdateName(item, name)}>
        Update
      </button>
    </li>
  );
}