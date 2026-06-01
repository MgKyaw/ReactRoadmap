//Only call Hooks at the top level 

// Functions whose names start with use are called Hooks in React.

// Don’t call Hooks inside loops, conditions, nested functions, or try/catch/finally blocks. 

function Counter() {
  // ✅ Good: top-level in a function component
  const [count, setCount] = useState(0);
  // ...
}

function useWindowWidth() {
  // ✅ Good: top-level in a custom Hook
  const [width, setWidth] = useState(window.innerWidth);
  // ...
}