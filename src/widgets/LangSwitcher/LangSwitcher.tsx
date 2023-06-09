import { useTranslation } from 'react-i18next';
import i18n from 'shared/config/i18n/i18n';
import { Button } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
  className?: string;
}

export function LangSwitcher({ className }:LangSwitcherProps) {
    const { t } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <Button
            onClick={toggle}
            title={t('lang')}
            className={className}
        />

    );
}
