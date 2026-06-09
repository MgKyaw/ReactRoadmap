import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const useRequireAuth = (auth) => {
  const history = useHistory();

  useEffect(() => {
    if (!auth) {
      history.push("/login");
    }
  }, [auth, history]);
};