function Item({ item }) {
  return (
    <li>
      {item.name}
      <input type="text" value={item.name} />
    </li>
  );
}