import { useNavigate } from "react-router-dom";
import styles from "./Welcome.module.scss";

import ProfileIcon from "shared/assets/icons/ProfileIcon.svg";

export default function Welcome() {
  const navigate = useNavigate();

  const i18n = {
    title: "Добро пожаловать в мир Horizon!!!",
    buttonTitle: "Клик",
    email: "Email",
    password: "Password",
  };

  const navigateToMap = () => navigate("/map");

  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>{i18n.title}</span>
      <div className={styles.form}>
        <ProfileIcon />
        <span>{i18n.email}</span>
        <input className={styles.inputLogin} placeholder={i18n.email} />
        <span>{i18n.password}</span>
        <input
          className={styles.inputLogin}
          placeholder={i18n.password}
          type="password"
        />
      </div>
      <button onClick={navigateToMap}>{i18n.buttonTitle}</button>
    </div>
  );
}
