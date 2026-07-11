// const App = () => {
//   const [data, setData] = useState<Story[]>([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const [search, setSearch] = useState("");
//   const [activeSearch, setActiveSearch] = useState("react");

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);

//       const result = await axios(`${API}?query=${activeSearch}`);

//       setData(result.data.hits);
//       setIsLoading(false);
//     };

//     fetchData();
//   }, [activeSearch]);