import { UseTheme } from 'app/providers/ThemeProviders';
import { Button } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
  className?: string;
}

function ThemeSwitcher({ className }: ThemeSwitcherProps) {
    const { toggleTheme } = UseTheme();

    return (
        <Button
            onClick={toggleTheme}
            className={className}
            title="Сменить тему"
        />
    );
}

export default ThemeSwitcher;
