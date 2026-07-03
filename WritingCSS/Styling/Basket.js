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

// function Basket({ items, onClick }) {
//   return (
//     <ul>
//       {items.map((item) => (
//         <li key={item.id}>
//           {item.name}
//           <button
//             type="button"
//             className="p-2 w-16 border border-solid border-gray-900 transition duration-100 ease-in hover:bg-gray-900 hover:text-white"
//             onClick={() => onClick(item)}
//           >
//             {item.isFavorite ? 'Unlike' : 'Like'}
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// }

// function Basket({ items, onClick }) {
//   return (
//     <ul>
//       {items.map((item) => (
//         <li key={item.id}>
//           {item.name}
//           <button
//             type="button"
//             onClick={() => onClick(item)}
//             style={{
//               cursor: 'pointer',
//               border: '1px solid #1a202c',
//               padding: '8px',
//               minWidth: '64px',

//               background: 'transparent',

//               transition: 'all 0.1s ease-in',
//             }}
//           >
//             {item.isFavorite ? 'Unlike' : 'Like'}
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// }

function Basket({ items, onClick }) {
  return (
    <ul
      style={{
        margin: '0',
        padding: '0',
        listStyleType: 'none',
      }}
    >
      {items.map((item) => (
        <li
          key={item.id}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '8px 0',
          }}
        >
          {item.name}
          <button
            type="button"
            onClick={() => onClick(item)}
            style={{
              cursor: 'pointer',
              border: '1px solid #1a202c',
              padding: '8px',
              minWidth: '64px',

              background: 'transparent',

              transition: 'all 0.1s ease-in',
            }}
          >
            {item.isFavorite ? 'Unlike' : 'Like'}
          </button>
        </li>
      ))}
    </ul>
  );
}
