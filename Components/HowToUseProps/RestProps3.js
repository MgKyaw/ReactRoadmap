const App = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <Button
        label={count}
        disabled
        onClick={() => setCount(count + 1)}
      />
    </div>
  );
};