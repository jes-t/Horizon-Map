import { useNavigate } from "react-router-dom";
import styles from "./Welcome.module.scss";

export default function Welcome() {
  const navigate = useNavigate();

  const i18n = {
    title: "Добро пожаловать в мир Horizon!!!",
    description:
      "Когда-нибудь здесь будет окошко авторизации, а пока кликай кнопку, чтобы увидеть карту",
    buttonTitle: "Клик",
  };

  const navigateToMap = () => navigate("/map");

  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>{i18n.title}</span>
      <span className={styles.description}>{i18n.description}</span>
      <button onClick={navigateToMap}>{i18n.buttonTitle}</button>
    </div>
  );
}
