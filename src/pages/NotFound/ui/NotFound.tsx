import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useNavigate } from 'react-router';
import styles from './NotFound.module.scss';

interface NotFoundProps {
    className?: string
}

export function NotFound({ className }: NotFoundProps) {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const i18n = {
        title: t('not_found'),
        buttonTitle: t('home'),
    };

    const navigateToAuth = () => navigate('/');

    return (
        <div className={classNames(styles.NotFound, {}, [className])}>
            {i18n.title}
            <button
                className={styles.Title}
                type="button"
                onClick={navigateToAuth}
            >
                {i18n.buttonTitle}
            </button>
        </div>
    );
}
