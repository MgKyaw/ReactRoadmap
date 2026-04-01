const fetchData = () => {
  return { data: null };
};

const App = () => {
  const { data } = fetchData();

  if (!data) return <div>No data loaded yet.</div>;

  return <TodoList data={data} />;
};