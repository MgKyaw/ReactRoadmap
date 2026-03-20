// function App() {
//    return (
//       <>
//          <div>A div</div>
//          <button>Get dimensions of div</button>
//       </>
//    );
// }

function App() {
   const divElement = useRef(document.querySelector('div'));

   function onClick() {
      const width = divElement.current.offsetWidth;
      const height = divElement.current.offsetHeight;
      alert(`Width: ${width}, Height: ${height}`);
   }

   return (
      <>
         <div>A div</div>
         <button onClick={onClick}>Get dimensions of div</button>
      </>
   );
}
