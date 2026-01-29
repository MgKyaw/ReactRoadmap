// function Item({ item }) {
//   return (
//     <li>
//       {item.name}
//       <input type="text" value={item.name} />
//     </li>
//   );
// }

function Item({ item }) {
  // derive initial state from props
  const [name, setName] = React.useState(item.name);

  function handleNameChange(event) {
    setName(event.target.value);
  }

  return (
    <li>
      {item.name}
      <input type="text" value={name} onChange={handleNameChange} />
    </li>
  );
}