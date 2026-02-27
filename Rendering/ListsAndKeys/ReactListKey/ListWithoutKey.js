const list = ['Learn React', 'Learn GraphQL'];

const ListWithoutKey = () => (
  <div>
    <ul>
      {list.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  </div>
);

// const ListWithoutKey = () => (
//   <div>
//     <ul>
//       {list.map((item, index) => (
//         <li key={index}>{item}</li>
//       ))}
//     </ul>
//   </div>
// );