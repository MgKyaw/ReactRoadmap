const List = ({ users }) => (
  <ul>
    {users.map(user => <Item key={user.id}>{user.name}</Item>)}
  </ul>
);

const Item = ({ children }) => (
  <p>{children}</p>
);
