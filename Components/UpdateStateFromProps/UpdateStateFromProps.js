function updateFakeUserName(users, id, name) {
  const updatedUsers = users.map((user) => {
    if (user.id === id) {
      return { id, name };
    } else {
      return user;
    }
  });

  return new Promise((resolve) =>
    setTimeout(() => resolve(updatedUsers), 1000)
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

  async function handleUpdateName(item, name) {
    const newUsers = await updateFakeUserName(users, item.id, name);

    setUsers(newUsers);
  }

  return (
    <div>
      <h1>Derive State from Props in React</h1>

      <List list={users} onUpdateName={handleUpdateName} />
    </div>
  );
}