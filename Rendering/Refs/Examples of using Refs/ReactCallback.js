// function ComponentWithRefRead() {
//   const [text, setText] = React.useState('Some text ...');

//   function handleOnChange(event) {
//     setText(event.target.value);
//   }

//   const ref = React.useCallback((node) => {
//     if (!node) return;

//     const { width } = node.getBoundingClientRect();

//     document.title = `Width:${width}`;
//   }, []);

//   return (
//     <div>
//       <input type="text" value={text} onChange={handleOnChange} />
//       <div>
//         <span ref={ref}>{text}</span>
//       </div>
//     </div>
//   );
// }

function ComponentWithRefRead() {
  const [text, setText] = React.useState('Some text ...');

  function handleOnChange(event) {
    setText(event.target.value);
  }

  const ref = React.useCallback((node) => {
    if (!node) return;

    const { width } = node.getBoundingClientRect();

    document.title = `Width:${width}`;
  }, [text]);

  return (
    <div>
      <input type="text" value={text} onChange={handleOnChange} />
      <div>
        <span ref={ref}>{text}</span>
      </div>
    </div>
  );
}
