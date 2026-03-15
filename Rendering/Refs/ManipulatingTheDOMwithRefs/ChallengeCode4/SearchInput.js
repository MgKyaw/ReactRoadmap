// export default function SearchInput() {
//   return (
//     <input
//       placeholder="Looking for something?"
//     />
//   );
// }

// Solution Code
export default function SearchInput({ ref }) {
  return (
    <input
      ref={ref}
      placeholder="Looking for something?"
    />
  );
}
