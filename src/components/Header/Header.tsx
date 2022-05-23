import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setAuth } from "../../store/userSlice";
import "./Header.css";

const Header = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    Cookies.remove("auth-token");
    dispatch(setAuth(false));
  };

  return (
    <header>
      <nav>
        <ul className="nav_block">
          <li>
            <Link className="link" to="/">
              Главная
            </Link>
          </li>
          <li>
            <Link className="link" to="/training">
              Обучение
            </Link>
          </li>
          <li>
            <button className="exit" onClick={handleLogOut}>
              Выход
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
