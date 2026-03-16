function App() {
  return (
    <ComponentWithDomApi
      label="Label"
      value="Value"
      isFocus
    />
  );
}

function ComponentWithDomApi({ label, value, isFocus }) {
  const ref = React.useRef(); // (1)

  React.useEffect(() => {
    if (isFocus) {
      ref.current.focus(); // (3)
    }
  }, [isFocus]);

  return (
    <label>
      {/* (2) */}
      {label}: <input type="text" value={value} ref={ref} />
    </label>
  );
}