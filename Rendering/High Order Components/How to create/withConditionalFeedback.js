// const withConditionalFeedback = (Component) => (props) => {
//   if (props.isLoading) return <div>Loading data.</div>;
//   if (!props.data) return <div>No data loaded yet.</div>;
//   if (!props.data.length) return <div>Data is empty.</div>;

//   return <Component {...props} />;
// };

// const App = () => {
//   const { data, isLoading } = fetchData();

//   return <TodoList data={data} isLoading={isLoading} />;
// };

// const BaseTodoList = ({ data }) => {
//   return (
//     <ul>
//       {data.map((item) => (
//         <TodoItem key={item.id} item={item} />
//       ))}
//     </ul>
//   );
// };

// const TodoList = withConditionalFeedback(BaseTodoList);


// const withConditionalFeedback = (dataEmptyFeedback) => (Component)
//   => (props) => {
//     if (props.isLoading) return <div>Loading data.</div>;
//     if (!props.data) return <div>No data loaded yet.</div>;

//     if (!props.data.length)
//       return <div>{dataEmptyFeedback || 'Data is empty.'}</div>;

//     return <Component {...props} />;
//   };
// const App = () => {
//   const { data, isLoading } = fetchData();

//   return <TodoList data={data} isLoading={isLoading} />;
// };

// const BaseTodoList = ({ data }) => {
//   return (
//     <ul>
//       {data.map((item) => (
//         <TodoItem key={item.id} item={item} />
//       ))}
//     </ul>
//   );
// };

// const TodoList = withConditionalFeedback('Todos are empty.')(
//   BaseTodoList
// );

const withConditionalFeedback =
  ({ loadingFeedback, noDataFeedback, dataEmptyFeedback }) =>
  (Component) =>
  (props) => {
    if (props.isLoading)
      return <div>{loadingFeedback || 'Loading data.'}</div>;

    if (!props.data)
      return <div>{noDataFeedback || 'No data loaded yet.'}</div>;

    if (!props.data.length)
      return <div>{dataEmptyFeedback || 'Data is empty.'}</div>;

    return <Component {...props} />;
  };

  // ...

const TodoList = withConditionalFeedback({
  loadingFeedback: 'Loading Todos.',
  noDataFeedback: 'No Todos loaded yet.',
  dataEmptyFeedback: 'Todos are empty.',
})(BaseTodoList);