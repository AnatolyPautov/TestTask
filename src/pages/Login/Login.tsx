import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setAuth } from "../../store/userSlice";
import "../Auth.css";
import Cookies from "js-cookie";
import { ClipLoader } from "react-spinners";
import { useState } from "react";

const url = "https://safe-waters-66742.herokuapp.com/auth/login";

const Login = () => {
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit } = useForm<FormData>();

  const dispatch = useDispatch();

  const onSubmit = async ({ login, password }: FormData) => {
    setLoading(true);
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          login,
          password,
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
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="auth_form">
        <h1 className="auth_title">Авторизация</h1>

        <input className="input" placeholder="Логин" {...register("login")} />
        <input
          className="input"
          placeholder="Пароль"
          type="password"
          {...register("password")}
        />
        <Link className="auth_link" to="/registartion">
          Еще не зарегистрированны?
        </Link>
        <button className="button" type="submit">
          {loading ? (
            <ClipLoader color={"#05276f"} loading={loading} size={30} />
          ) : (
            "Начать"
          )}
        </button>
      </div>
    </form>
  );
};

type FormData = {
  login: string;
  password: string;
};

export default Login;
