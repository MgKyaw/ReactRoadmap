const App = () => {
  const [data, setData] = useState<Story[]>([]);
  const [search, setSearch] = useState("");
  const [activeSearch, setActiveSearch] = useState("react");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`${API}?query=${activeSearch}`);

      setData(result.data.hits);
    };

    fetchData();
  }, [activeSearch]);

//   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearch(event.target.value);
//   };

  const handleSearchSubmit = () => {
    setActiveSearch(search);
    setSearch("");
  };

  return (
    <>
      <input type="text" value={search} onChange={handleSearchChange} />
      <button type="button" onClick={handleSearchSubmit}>
        Search
      </button>

      <ul>...</ul>
    </>
  );
};