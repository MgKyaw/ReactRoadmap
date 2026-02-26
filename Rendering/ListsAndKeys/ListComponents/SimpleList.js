const list = ['a', 'b', 'c'];

const SimpleList = () => (
  <ul>
    {list.map(function(item) {
      return <li key={item}>{item}</li>;
    })}
  </ul>
);