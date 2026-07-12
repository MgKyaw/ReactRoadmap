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

// type UseQueryArgs<T> = {
//   queryKey: string[];
//   queryFn: () => Promise<T>;
//   initialData: T;
// };

// const useQuery = <T>({ queryFn, queryKey, initialData }: UseQueryArgs<T>) => {
//   const [data, setData] = useState<T>(initialData);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsError(false);
//       setIsLoading(true);

//       try {
//         const result = await queryFn();

//         setData(result);
//       } catch (error) {
//         setIsError(true);
//       }

//       setIsLoading(false);
//     };

//     fetchData();
//   }, [...queryKey]);

//   return { data, isLoading, isError };
// };