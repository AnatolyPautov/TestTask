import { FC } from "react";
import { useForm } from "react-hook-form";
import "./Module.css";
import Check from "../../images/check.png";
import GreenCheck from "../../images/green-check.png";
import ClipLoader from "react-spinners/ClipLoader";
import { Videos } from "../../types/types";
import { FormData } from "../../pages/Training/Training";

interface ModuleProps {
  videos: Videos[];
  currentTab: number;
  loading: boolean;
  isCorrectAnswer: boolean;
  onSubmit: (values: FormData) => void;
}

const Module: FC<ModuleProps> = ({
  videos,
  currentTab,
  loading,
  isCorrectAnswer,
  onSubmit,
}) => {
  const { register, handleSubmit } = useForm<FormData>();

  const questionTitle = videos[currentTab]?.questions
    ? videos[currentTab]?.questions[0]?.title
    : "Извините, вопросы кончились -_^";

  return (
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
            {loading ? (
              <ClipLoader color={"#ff6e00"} loading={loading} size={30} />
            ) : (
              "Проверить"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Module;
