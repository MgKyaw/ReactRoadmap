// const App = () => {
//   const [data, setData] = useState<Story[]>([]);
//   const [search, setSearch] = useState("react");

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await axios(`${API}?query=react`);

//       setData(result.data.hits);
//     };

//     fetchData();
//   }, []);

//   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearch(event.target.value);
//   };

//   return (
//     <>
//       <input type="text" value={search} onChange={handleSearchChange} />

//       <ul>
//         {data.map((item) => (
//           <li key={item.objectID}>
//             <a href={item.url}>{item.title}</a>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };