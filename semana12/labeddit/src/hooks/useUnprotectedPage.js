import { useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";


const useUnprotectedPage = () => {
  const history = useHistory();

  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      history.push("/");
    }
  }, [history]);
};

export default useUnprotectedPage;
