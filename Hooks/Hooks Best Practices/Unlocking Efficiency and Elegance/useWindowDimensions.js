// Encapsulate Logic in Custom Hooks:

// Custom Hooks provide a way to encapsulate and reuse logic across multiple components. By extracting shared functionality 
// into a custom Hook, you promote code reusability and maintainability. 
// Custom Hooks should start with the “use” prefix to indicate their Hook nature.

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowDimensions;
}

function MyComponent() {
  const { width, height } = useWindowDimensions();

  // ...
}