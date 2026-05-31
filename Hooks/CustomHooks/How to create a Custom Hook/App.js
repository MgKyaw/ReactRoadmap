function App() {
  const [isToggle, { setToggle }] = useBoolean(false);

  return (
    <div>
      <button type="button" onClick={setToggle}>
        Toggle
      </button>

      {isToggle.toString()}
    </div>
  );
}