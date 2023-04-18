import { UseTheme } from 'app/providers/ThemeProviders';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

function ThemeSwitcher({ className }: ThemeSwitcherProps) {
    const { theme, toggleTheme } = UseTheme();

    return (
        <button
            type="button"
            onClick={toggleTheme}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
        >
            Сменить тему
        </button>
    );
}

export default ThemeSwitcher;
