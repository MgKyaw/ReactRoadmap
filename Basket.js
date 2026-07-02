function Basket({ items, onClick }) {
  return (
    <ul className="unordered-list">
      {items.map((item) => (
        <li key={item.id} className="list-item">
          {item.name}
          <button
            type="button"
            className="button"
            onClick={() => onClick(item)}
          >
            {item.isFavorite ? 'Unlike' : 'Like'}
          </button>
        </li>
      ))}
    </ul>
  );
}