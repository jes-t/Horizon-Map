import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './SideBar.module.scss';

interface SideBarProps {
  className?: string;
}

export function SideBar({ className }:SideBarProps) {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
    const onToggle = () => {
        setIsCollapsed((prev) => !prev);
    };
    return (
        <div
            className={classNames(
                styles.SideBar,
                { [styles.collapsed]: isCollapsed },
                [className],
            )}
        >
            <button type="button" onClick={onToggle}>toggle</button>
        </div>
    );
}
