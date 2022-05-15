import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "../Auth.css";

const Registartion = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={onSubmit}>
      <div className="auth_form">
        <h1 className="auth_title">Регистрация</h1>

        <input className="input" placeholder="Логин" {...register("login")} />
        <input
          className="input"
          placeholder="Пароль"
          type="password"
          {...register("password")}
        />
        <input
          className="input"
          placeholder="Подтверджение пароля"
          type="password"
          {...register("confirmPassword")}
        />
        <Link className="auth_link" to={"/login"}>
          Уже есть аккаунт?
        </Link>
        <button className="button" type="button" onClick={onSubmit}>
          Начать
        </button>
      </div>
    </form>
  );
};

type FormData = {
  login: string;
  password: string;
  confirmPassword: string;
};

export default Registartion;
