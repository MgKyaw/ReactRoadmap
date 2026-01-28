// const List = ({ users }) => (
//   <ul>
//     {users.map(user => <Item key={user.id}>{user.name}</Item>)}
//   </ul>
// );

// const Item = ({ children }) => (
//   <p>{children}</p>
// );

// const List = ({ users }) => (
//   <ul>
//     {users.map(user => <Item key={user.id}>{user.name}</Item>)}
//   </ul>
// );

// const Item = ({ key, children }) => (
//   <p>{key} {children}</p>
// );

const List = ({ users }) => (
  <ul>
    {users.map(user => (
      <Item key={user.id} id={user.id}>
        {user.name}
      </Item>
    ))}
  </ul>
);

const Item = ({ id, children }) => (
  <p>{id} {children}</p>
);