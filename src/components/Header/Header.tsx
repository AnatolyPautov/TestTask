import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../../store/userSlice";
import "./Header.css";

const Header = () => {
  const dispatch = useDispatch();
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
            <button className="exit" onClick={() => dispatch(logOut())}>
              Выход
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
