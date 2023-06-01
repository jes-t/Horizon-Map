import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import ProfileIcon from 'shared/assets/icons/ProfileIcon.svg';
import styles from './SideBar.module.scss';

interface SideBarProps {
  className?: string;
}

export function SideBar({ className }:SideBarProps) {
    const { t } = useTranslation();
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
    const onToggle = () => {
        setIsCollapsed((prev) => !prev);
    };
    return (
        <div
            data-testid="sidebar"
            className={classNames(
                styles.SideBar,
                { [styles.collapsed]: isCollapsed },
                [className],
            )}
        >
            <ProfileIcon />
            <Button
                data-testid="sidebarToggle"
                onClick={onToggle}
                title={t('toggle')}
            />
        </div>
    );
}
