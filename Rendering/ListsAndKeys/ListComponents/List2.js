import React from 'react';

const initialList = [];

const List = () => {
  const [list, setList] = React.useState(initialList);

  return (
    <div>
      <ul>
        {list.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;