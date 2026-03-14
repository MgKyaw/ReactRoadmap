// export default function SearchButton() {
//   return (
//     <button>
//       Search
//     </button>
//   );
// }

// Solution Code
export default function SearchButton({ onClick }) {
  return (
    <button onClick={onClick}>
      Search
    </button>
  );
}
