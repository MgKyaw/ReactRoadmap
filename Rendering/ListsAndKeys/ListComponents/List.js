const List = ({ list }) => (
  <ul>
    {(list || []).map(item => (
      <ListItem key={item.id} item={item} />
    ))}
  </ul>
);