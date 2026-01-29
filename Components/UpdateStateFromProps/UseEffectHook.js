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

function getFakeUsers() {
  return new Promise((resolve) =>
    setTimeout(() => resolve(fakeUsers), 2000)
  );
}

function App() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    const fetchUsers = async () => {
      const data = await getFakeUsers();

      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Derive State from Props in React</h1>

      <List list={users} />
    </div>
  );
}