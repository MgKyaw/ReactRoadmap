const SimpleList = () => (
  <ul>
    {['a', 'b', 'c'].map(function(item) {
      return <li key={item}>{item}</li>;
    })}
  </ul>
);