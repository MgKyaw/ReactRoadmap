// const useQuery = (activeSearch: string) => {
//   const [data, setData] = useState<Story[]>([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsError(false);
//       setIsLoading(true);

//       try {
//         const result = await axios(`${API}?query=${activeSearch}`);

//         setData(result.data.hits);
//       } catch (error) {
//         setIsError(true);
//       }

//       setIsLoading(false);
//     };

//     fetchData();
//   }, [activeSearch]);

//   return { data, isLoading, isError };
// };