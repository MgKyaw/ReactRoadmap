// function ComponentWithRefRead() {
//   const [text, setText] = React.useState('Some text ...');

//   function handleOnChange(event) {
//     setText(event.target.value);
//   }

//   const ref = React.useRef();

//   React.useEffect(() => {
//     const { width } = ref.current.getBoundingClientRect();

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

  const ref = React.useRef();

  React.useEffect(() => {
    const { width } = ref.current.getBoundingClientRect();

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