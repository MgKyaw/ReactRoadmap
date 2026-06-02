function usePagination(initialPage) {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const nextPage = () => setCurrentPage((prevPage) => prevPage + 1);
  const previousPage = () => setCurrentPage((prevPage) => prevPage - 1);

  return { currentPage, nextPage, previousPage };
}

function MyComponent() {
  const { currentPage, nextPage, previousPage } = usePagination(1);

  // ...
}