const TodoList = compose(
  withLoadingFeedback('Loading Todos.'),
  withNoDataFeedback('No Todos loaded yet.'),
  withDataEmptyFeedback('Todos are empty.')
)(BaseTodoList);