// Memoize Expensive Computations:

function List({ items, onItemClick }) {
  const handleClick = useCallback((item) => {
    onItemClick(item);
  }, [onItemClick]);

  const processedItems = useMemo(() => {
    // Expensive computation
    return processItems(items);
  }, [items]);

  // ...
}
