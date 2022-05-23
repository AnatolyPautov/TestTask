import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setAuth } from "../../store/userSlice";
import "../Auth.css";
const url = "https://safe-waters-66742.herokuapp.com/auth/register";

const Registartion = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const dispatch = useDispatch();

  const onSubmit = async ({ confirmPassword, login, password }: FormData) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          login,
          password,
          confirmPassword,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { token, message } = await response.json();

      if (token) {
        Cookies.set("auth-token", token);
        dispatch(setAuth(true));
      } else if (message) {
        alert(message);
      }
    } catch (error) {
      console.error("Ошибка:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
          placeholder="Повторите пароль"
          type="password"
          {...register("confirmPassword")}
        />
        <Link className="auth_link" to="/login">
          Уже есть аккаунт?
        </Link>
        <button className="button" type="submit">
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
