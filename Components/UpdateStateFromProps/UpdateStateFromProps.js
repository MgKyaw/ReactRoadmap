function App() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    const fetchUsers = async () => {
      const data = await getFakeUsers();

      setUsers(data);
    };

    fetchUsers();
  }, []);

  function handleUpdateName(item, name) {
    const newUsers = users.map((user) => {
      if (user.id === item.id) {
        return {
          id: user.id,
          name: name,
        };
      } else {
        return user;
      }
    });

    setUsers(newUsers);
  }

  return (
    <div>
      <h1>Derive State from Props in React</h1>

      <List list={users} onUpdateName={handleUpdateName} />
    </div>
  );
}