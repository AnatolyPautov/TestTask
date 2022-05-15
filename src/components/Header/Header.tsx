import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
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
            <Link className="link" to="/about">
              Обучение
            </Link>
          </li>
          <li>
            <button className="exit">Выход</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
