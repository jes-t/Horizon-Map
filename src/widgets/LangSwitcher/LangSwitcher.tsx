import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import i18n from "shared/config/i18n/i18n";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./LangSwitcher.module.scss";

interface LangSwitcherProps {
  className: string;
}

const LangSwitcher: FunctionComponent<LangSwitcherProps> = ({ className }) => {
  const { t } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };
  return (
    <button
      className={classNames(styles.LangSwitcher, {}, [className])}
      onClick={toggle}
    >
      {t("lang")}
    </button>
  );
};

export default LangSwitcher;
