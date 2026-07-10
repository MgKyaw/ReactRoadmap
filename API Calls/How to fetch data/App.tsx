import { useState } from "react";

type Story = {
  objectID: string;
  title: string;
  url: string;
};

const App = () => {
  const [data, setData] = useState<Story[]>([]);

  return (
    <ul>
      {data.map((item) => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default App;