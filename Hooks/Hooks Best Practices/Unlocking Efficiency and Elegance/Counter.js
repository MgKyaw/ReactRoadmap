//Use Hooks at the Top Level:

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Perform side effects here
  }, [count]);

  if (count === 10) {
    // Avoid calling Hooks here
  }

//   return (
//     // JSX code here
//   );
}