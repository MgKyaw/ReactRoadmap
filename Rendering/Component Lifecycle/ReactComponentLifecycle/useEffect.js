useEffect(
  () => {
    document.addEventListener(“click”, someFunc);
    
    return () => {
      document.removeEventListener(“click”, someFunc);
    };
  },
  []
);