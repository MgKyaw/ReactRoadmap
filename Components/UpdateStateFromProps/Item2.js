// function Item({ item, onUpdateName }) {
//   // derive initial state from props
//   const [name, setName] = React.useState(item.name + '!');

//   function handleNameChange(event) {
//     setName(event.target.value);
//   }

//   return (
//     <li>
//       {item.name}
//       <input type="text" value={name} onChange={handleNameChange} />
//       <button type="button" onClick={() => onUpdateName(item, name)}>
//         Update
//       </button>
//     </li>
//   );
// }

// function Item({ item, onUpdateName }) {
//   // derive initial state from props
//   const [name, setName] = React.useState(item.name + '!');

//   function handleNameChange(event) {
//     setName(event.target.value);
//   }

//   // derive updated state from props
//   React.useEffect(() => {
//     setName(item.name + '!');
//   }, [item]);

//   return (
//     <li>
//       {item.name}
//       <input type="text" value={name} onChange={handleNameChange} />
//       <button type="button" onClick={() => onUpdateName(item, name)}>
//         Update
//       </button>
//     </li>
//   );
// }

function Item({ item, onUpdateName }) {
  // derive initial state from props
  const [name, setName] = React.useState(item.name);

  function handleNameChange(event) {
    setName(event.target.value);
  }

  // derive updated state from props
  React.useEffect(() => {
    setName(item.name);
  }, [item]);

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