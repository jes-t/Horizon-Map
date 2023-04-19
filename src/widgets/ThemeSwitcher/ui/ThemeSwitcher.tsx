import { UseTheme } from 'app/providers/ThemeProviders';
import { classNames } from 'shared/lib/classNames/classNames';

interface ThemeSwitcherProps {
  className?: string;
}

function ThemeSwitcher({ className }: ThemeSwitcherProps) {
    const { theme, toggleTheme } = UseTheme();

    return (
        <button
            type="button"
            onClick={toggleTheme}
            className={classNames('', {}, [className])}
        >
            Сменить тему
        </button>
    );
}

export default ThemeSwitcher;
