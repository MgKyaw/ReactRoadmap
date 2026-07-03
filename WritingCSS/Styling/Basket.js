// function Basket({ items, onClick }) {
//   return (
//     <ul>
//       {items.map((item) => (
//         <li key={item.id}>
//           {item.name}
//           <Button type="button" onClick={() => onClick(item)}>
//             {item.isFavorite ? 'Unlike' : 'Like'}
//           </Button>
//         </li>
//       ))}
//     </ul>
//   );
// }

function Basket({ items, onClick }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name}
          <button
            type="button"
            className="p-2 w-16 border border-solid border-gray-900 transition duration-100 ease-in hover:bg-gray-900 hover:text-white"
            onClick={() => onClick(item)}
          >
            {item.isFavorite ? 'Unlike' : 'Like'}
          </button>
        </li>
      ))}
    </ul>
  );
}