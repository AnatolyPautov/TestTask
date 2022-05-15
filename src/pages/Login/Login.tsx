import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "../Auth.css";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={onSubmit}>
      <div className="auth_form">
        <h1 className="auth_title">Авторизация</h1>

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
        <Link className="auth_link" to={"/registartion"}>
          Еще не зарегистрированны?
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

export default Login;
