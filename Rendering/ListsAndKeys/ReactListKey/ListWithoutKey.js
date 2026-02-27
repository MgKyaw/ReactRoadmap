const list = ['Learn React', 'Learn GraphQL'];

const ListWithoutKey = () => (
  <div>
    <ul>
      {list.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  </div>
);