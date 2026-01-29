import React from 'react';

const fakeUsers = [
  {
    id: '1',
    name: 'Robin',
  },
  {
    id: '2',
    name: 'Dennis',
  },
];

function App() {
  const [users, setUsers] = React.useState(fakeUsers);

  return (
    <div>
      <h1>Derive State from Props in React</h1>

      <List list={users} />
    </div>
  );
}

function List({ list }) {
  return (
    <ul>
      {list.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
}

function Item({ item }) {
  return (
    <li>
      <span>{item.name}</span>
    </li>
  );
}

export default App;