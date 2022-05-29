import "./Training.css";
import MoreCats from "../../images/more-cats.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectVideos } from "../../store/store";
import { setVideos } from "../../store/videosSlice";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import Module from "../../components/Module";
import Tab from "../../components/Tab";

const Home = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [loading, setLoading] = useState(false);

  const { setValue } = useForm<FormData>();
  const authToken = Cookies.get("auth-token");
  const { videos } = useSelector(selectVideos);
  const dispatch = useDispatch();

  const questionId = videos[currentTab]?.questions[0].id;

  const onSelectTab = (index: number) => {
    setCurrentTab(index);
    setIsCorrectAnswer(false);
    setValue("answer", "");
  };

  const getVideos = async () => {
    const url = "https://safe-waters-66742.herokuapp.com/video";
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
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

  const onSubmit = async ({ answer }: FormData) => {
    const url = `https://safe-waters-66742.herokuapp.com/question/complete/${questionId}`;

    setLoading(true);
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ answer }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      });
      const json = await response.json();

      if (json.message) {
        setIsCorrectAnswer(false);
        alert(json.message[0]);
      } else if (json) {
        setIsCorrectAnswer(true);
        alert("Правильно");
      } else {
        setIsCorrectAnswer(false);
        alert("Неверный ответ");
      }
    } catch (error) {
      console.error("Ошибка:", error);
    }
    setLoading(false);
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
              <Tab
                item={item}
                index={index}
                onClick={() => onSelectTab(index)}
              />
            </li>
          ))}
        </ul>

        <div className="right_block">
          <Module
            videos={videos}
            currentTab={currentTab}
            loading={loading}
            isCorrectAnswer={isCorrectAnswer}
            onSubmit={onSubmit}
          />

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

export type FormData = {
  answer: string;
};

export default Home;
