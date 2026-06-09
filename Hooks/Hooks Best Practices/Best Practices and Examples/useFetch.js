import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [resource, setResource] = useState({
    loading: true,
    error: null,
    data: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const req = await fetch(url);
        const data = await req.json();
        setResource((prev) => ({ ...prev, data }));
      } catch (error) {
        setResource((prev) => ({ ...prev, error: error.message }));
      } finally {
        setResource((prev) => ({ ...prev, loading: false }));
      }
    };
    fetchData();
  }, []);

  return resource;
};