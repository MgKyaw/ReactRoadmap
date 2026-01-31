function List({ list }) {
  if (!list) {
    return null;
  }

  if (!list.length) {
    return <p>Sorry, the list is empty.</p>;
  }

  return (
    <div>
      {list.map(item => (
        <Item item={item} />
      ))}
    </div>
  );
}