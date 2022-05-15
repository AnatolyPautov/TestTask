import "./Home.css";
import ProductStepsImg from "../../images/product-steps.png";
import CourseCats from "../../images/cats.png";
import TrainingCat from "../../images/cat-writes.png";
import QuestionCat from "../../images/cat-cuts.png";

const Home = () => {
  return (
    <>
      <section className="top">
        <div className="wrapper">
          <h1 className="top_title">Дизайн-мышление</h1>
          <p className="top_desc">Сделай свой первый продукт</p>
          <div className="top_img-container">
            <img src={ProductStepsImg} alt="Шаги создания продукта" />
          </div>
        </div>
      </section>

      <section className="explanation">
        <div className="wrapper">
          <p className="explanation_desc">
            Дизайн-мышление — способ решения задач, ориентированных в первую
            очередь на интересы пользователя
          </p>
        </div>
      </section>

      <section className="block">
        <div className="wrapper">
          <div className="conatiner">
            <img src={CourseCats} alt="Для кого курс?" />

            <div className="info">
              <h2 className="subtitle">Для кого курс?</h2>
              <ul className="list">
                <li className="desc-list">Студенты кафедры ПМиФИ</li>
                <li className="desc-list">
                  Всех желающих, кто хочет разобраться в дизайн-мышлении и зачем
                  оно нужно
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="training">
        <div className="wrapper">
          <div className="conatiner">
            <div className="info">
              <h2 className="subtitle">Как проходит обучение?</h2>
              <ul className="list">
                <li className="desc-list">
                  В удобное время смотрите видео и выполняете тест по модулю
                </li>
                <li className="desc-list">
                  Далее открываете ресурсы в miro и продолжаете обучение на
                  практике
                </li>
              </ul>
            </div>

            <div>
              <img src={TrainingCat} alt="Как проходит обучение?" />
            </div>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrapper">
          <div className="conatiner">
            <img src={QuestionCat} alt="Вопросы?" />

            <div className="info">
              <h2 className="subtitle">Вопросы?</h2>
              <ul className="list">
                <li className="desc-list">
                  Ищите ответы{" "}
                  <a href="http://pmifi.1der.link/DesignThinkingCourse">
                    здесь
                  </a>
                </li>
                <li className="desc-list">
                  Нет вашего ответа? Пишите нам на почту: prikladnay@yandex.ru
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
