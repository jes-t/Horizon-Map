import { FunctionComponent, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./SideBar.module.scss";

interface SideBarProps {
  className?: string;
}

const SideBar: FunctionComponent<SideBarProps> = ({ className }) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const onToggle = () => {
    setIsCollapsed((prev) => !prev);
  };
  return (
    <div
      className={classNames(
        styles.SideBar,
        { [styles.collapsed]: isCollapsed },
        [className]
      )}
    >
      <button onClick={onToggle}>toggle</button>
    </div>
  );
};

export default SideBar;
