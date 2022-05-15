import "./Footer.css";
import Telegram from "../../images/tg.png";

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <div className="footer_container">
          <div>
            <h3 className="title">Контакты</h3>
            <ul>
              <li className="contact">Тел.: (3812) 65-98-27 </li>
              <li className="contact">Email: prikladnay@yandex.ru</li>
            </ul>
          </div>
          <div>
            <a href="http://pmifi.1der.link/tg">
              <img src={Telegram} alt="telegram" />
            </a>
          </div>
        </div>
        <p className="desc">
          Картинки для этого курса взяты с сайта лучшего книжного магазина{" "}
          <a href="http://pmifi.1der.link/pictures">МИФ</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
