const TODOS = [
  { id: '1', task: 'Do this', completed: true },
  { id: '2', task: 'Do that', completed: false },
];

const fetchData = () => {
  return { data: TODOS };
};

const App = () => {
  const { data } = fetchData();

  return <TodoList data={data} />;
};