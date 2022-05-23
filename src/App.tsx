import Cookies from "js-cookie";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { setAuth } from "./store/userSlice";

const App = () => {
  const dispatch = useDispatch();

  const reedCookies = () => {
    const authToken = Cookies.get("auth-token");
    if (authToken) {
      dispatch(setAuth(true));
    }
  };

  useEffect(() => reedCookies(), []);

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
