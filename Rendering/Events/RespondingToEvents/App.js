// export default function Button() {
//   return (
//     <button>
//       I don't do anything
//     </button>
//   );
// }

export default function Button() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

