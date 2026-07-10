// import { useEffect, useState } from "react";
// import axios from "axios";

// const API = "https://hn.algolia.com/api/v1/search";

// ...

// const App = () => {
//   const [data, setData] = useState<Story[]>([]);

//   useEffect(async () => {
//     const result = await axios(`${API}?query=react`);

//     setData(result.data.hits);
//   });

//   return (
//     <ul>
//       {data.map((item) => (
//         <li key={item.objectID}>
//           <a href={item.url}>{item.title}</a>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default App;