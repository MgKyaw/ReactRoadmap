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
    <UnorderedList>
      {items.map((item) => (
        <ListItem key={item.id}>
          {item.name}
          <Button type="button" onClick={() => onClick(item)}>
            {item.isFavorite ? 'Unlike' : 'Like'}
          </Button>
        </ListItem>
      ))}
    </UnorderedList>
  );
}