// const fetchData = () => {
//   return { data: null };
// };

// const App = () => {
//   const { data } = fetchData();

//   if (!data) return <div>No data loaded yet.</div>;

//   return <TodoList data={data} />;
// };

const fetchData = () => {
  return { data: [] };
};

const App = () => {
  const { data } = fetchData();

  if (!data) return <div>No data loaded yet.</div>;
  if (!data.length) return <div>Data is empty.</div>;

  return <TodoList data={data} />;
};