import "./Training.css";
import MoreCats from "../../images/more-cats.png";
import Check from "../../images/check.png";
import GreenCheck from "../../images/green-check.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, selectVideos } from "../../store/store";
import { setVideos } from "../../store/videosSlice";
import { useForm } from "react-hook-form";

const Home = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);

  const { token } = useSelector(selectUser);
  const { videos } = useSelector(selectVideos);
  const dispatch = useDispatch();
  const { register, handleSubmit, setValue } = useForm<FormData>();

  const questionTitle = videos[currentTab]?.questions
    ? videos[currentTab]?.questions[0]?.title
    : "Извините, вопросы кончились -_^";
  const questionId = videos[currentTab]?.questions[0].id;

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

  const onSubmit = async ({ answer }: FormData) => {
    const url = `https://safe-waters-66742.herokuapp.com/question/complete/${questionId}`;
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ answer }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const json = await response.json();
      if (json) {
        setIsCorrectAnswer(json);
        alert("Правильно");
      } else {
        setIsCorrectAnswer(json);
        alert("Неверный ответ");
      }
    } catch (error) {
      console.error("Ошибка:", error);
    }
  };

  const onSelectTab = (index: number) => {
    setCurrentTab(index);
    setIsCorrectAnswer(false);
    setValue("answer", "");
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
              <button className="tab_item" onClick={() => onSelectTab(index)}>
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

          <form onSubmit={handleSubmit(onSubmit)} className="tests_question">
            <p className="question_title">{questionTitle}</p>
            <textarea
              className="question_textarea"
              {...register("answer")}
            ></textarea>
            <div className="question_bottom">
              <img
                width={50}
                height={50}
                src={isCorrectAnswer ? GreenCheck : Check}
                alt="disabled check"
              />
              <button className="question_button" type="submit">
                Проверить
              </button>
            </div>
          </form>

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

type FormData = {
  answer: string;
};

export default Home;
