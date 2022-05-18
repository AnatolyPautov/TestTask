import "./Training.css";
import MoreCats from "../../images/more-cats.png";
import Check from "../../images/check.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, selectVideos } from "../../store/store";
import { setVideos } from "../../store/videosSlice";

const Home = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const { token } = useSelector(selectUser);
  const { videos } = useSelector(selectVideos);
  const dispatch = useDispatch();

  const questionTitle = videos[currentTab]?.questions
    ? videos[currentTab]?.questions[0]?.title
    : "Извините, вопросы кончились -_^";

  const getVideos = async () => {
    const url = "https://safe-waters-66742.herokuapp.com/video";
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const json = await response.json();

      if (json) {
        dispatch(setVideos(json));
      } else if (json.message) {
        alert(json.message);
      }
    } catch (error) {
      console.error("Ошибка:", error);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <>
      <section className="top">
        <div className="wrapper">
          <h1 className="top_title">Обучение дизайн-мышлению</h1>
          <p className="top_desc">
            Изучи популярные инстурменты для реализации проектов
          </p>
          <div className="top_img-container">
            <img src={MoreCats} alt="Много котов" />
          </div>
        </div>
      </section>

      <section className="tests">
        <ul>
          {videos.map((item, index) => (
            <li key={item.id}>
              <button className="tab_item" onClick={() => setCurrentTab(index)}>
                {item.title}
              </button>
            </li>
          ))}
        </ul>
        <div className="tests_content">
          <div className="tests_video">
            <iframe
              width="805"
              height="400"
              src={
                videos[currentTab]?.link ||
                "https://www.youtube.com/embed/64TCo-9BD_U"
              }
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
          <div className="tests_question">
            <p className="question_title">{questionTitle}</p>
            <textarea className="question_textarea" name="text"></textarea>
            <div className="question_bottom">
              <img width={50} height={50} src={Check} alt="disabled check" />
              <button className="question_button">Проверить</button>
            </div>
          </div>

          <div className="question_link-container">
            <a href="/" className="question_link">
              Продолжить практику в miro
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
