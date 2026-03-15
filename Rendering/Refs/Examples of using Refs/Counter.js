// function Counter() {
//   const [count, setCount] = React.useState(0);

//   function onClick() {
//     const newCount = count + 1;

//     setCount(newCount);
//   }

//   return (
//     <div>
//       <p>{count}</p>

//       <button type="button" onClick={onClick}>
//         Increase
//       </button>
//     </div>
//   );
// }

function Counter() {
  const hasClickedButton = React.useRef(false);

  const [count, setCount] = React.useState(0);

  function onClick() {
    const newCount = count + 1;

    setCount(newCount);

    hasClickedButton.current = true;
  }

  console.log('Has clicked button? ' + hasClickedButton.current);

  return (
    <div>
      <p>{count}</p>

      <button type="button" onClick={onClick}>
        Increase
      </button>
    </div>
  );
}
