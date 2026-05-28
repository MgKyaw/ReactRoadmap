// Write your custom Hook in this file!
export default function Counter() {
  const count = useCounter();
  return <h1>Seconds passed: {count}</h1>;
}