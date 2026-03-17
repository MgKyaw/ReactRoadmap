function ComponentWithImperativeRefState() {
  const ref = React.useRef();

  React.useEffect(() => {
    ref.current.textContent = 0;
  }, []);

  function handleClick() {
    ref.current.textContent = Number(ref.current.textContent) + 1;
  }

  return (
    <div>
      <div>
        <span ref={ref} />
      </div>

      <button type="button" onClick={handleClick}>
        Increase
      </button>
    </div>
  );
}