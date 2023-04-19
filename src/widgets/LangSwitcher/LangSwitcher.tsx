import { useTranslation } from 'react-i18next';
import i18n from 'shared/config/i18n/i18n';
import { classNames } from 'shared/lib/classNames/classNames';

interface LangSwitcherProps {
  className: string;
}

export function LangSwitcher({ className }:LangSwitcherProps) {
    const { t } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <button
            type="button"
            className={classNames('', {}, [className])}
            onClick={toggle}
        >
            {t('lang')}
        </button>
    );
}
