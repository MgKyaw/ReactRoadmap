function Counter() {
  const [count, setCount] = React.useState(0);

  function onClick() {
    const newCount = count + 1;

    setCount(newCount);
  }

  return (
    <div>
      <p>{count}</p>

      <button type="button" onClick={onClick}>
        Increase
      </button>
    </div>
  );
}