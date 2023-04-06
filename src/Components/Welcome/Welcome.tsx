import { Link } from "react-router-dom";
import "./welcome.scss";

export function Welcome() {
  return (
    <div className="wrapper">
      <span className="title">Добро пожаловать в мир Horizon!!!</span>
      <span className="description">
        Когда-нибудь здесь будет окошко авторизации, а пока кликай кнопку, чтобы
        увидеть карту
      </span>
      <button>
        <Link style={{ textDecoration: "none", color: "red" }} to="/map">
          Клик
        </Link>
      </button>
    </div>
  );
}
