const initialList = ['Learn React', 'Learn GraphQL'];

const ListWithUnstableIndex = () => {
  const [list, setList] = React.useState(initialList);

  const handleClick = event => {
    setList(list.slice().reverse());
  };

  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <label>
              <input type="checkbox" />
              {item}
            </label>
          </li>
        ))}
      </ul>

      <button type="button" onClick={handleClick}>
        Reverse List
      </button>
    </div>
  );
};

// Problem with unstable index

// // the initially rendered list of items

// [x] Learn React (index = 1)
// [ ] Learn GraphQL (index = 2)

// // becomes this after the reverse button click

// [x] Learn GraphQL (index = 1)
// [ ] Learn React (index = 2)