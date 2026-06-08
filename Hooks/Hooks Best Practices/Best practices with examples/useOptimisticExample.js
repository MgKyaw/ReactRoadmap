const TodoList = () => {
  const [todos, setTodos] = useState(['Buy milk', 'Walk dog']);
  const [optimisticTodos, addOptimisticTodo] = useOptimistic(
    todos,
    (state, newTodo) => [...state, newTodo]
  );

  const addTodo = async (newTodo) => {
    // Immediately update the UI
    addOptimisticTodo(newTodo);

    try {
      // Perform the actual server request
      const response = await saveTodoToServer(newTodo);
      // Update the real state with the server response
      setTodos(prev => [...prev, response.todo]);
    } catch (error) {
      // Handle the error case appropriately
      console.error('Failed to save todo:', error);
      // You might want to show an error notification here
      toast.error('Failed to add todo. Please try again.');
    }
  };

  return (
    <div className="todo-list">
      <ul>
        {optimisticTodos.map((todo, index) => (
          <li key={index} className="todo-item">
            {todo}
          </li>
        ))}
      </ul>
      <button 
        onClick={() => addTodo('New todo ' + Date.now())}
        className="add-button"
      >
        Add Todo
      </button>
    </div>
  );
};