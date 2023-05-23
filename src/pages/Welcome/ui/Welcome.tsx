import { useNavigate } from 'react-router-dom';

import ProfileIcon from 'shared/assets/icons/ProfileIcon.svg';
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { Button } from 'shared/ui/Button/Button';
import styles from './Welcome.module.scss';

export default function Welcome() {
    const navigate = useNavigate();
    const { t } = useTranslation('auth');

    const i18n = {
        title: t('title'),
        buttonTitle: t('button_title'),
        email: t('email'),
        password: t('password'),
    };

    const navigateToMap = () => navigate('/map');

    return (
        <div className={styles.wrapper}>
            <span className={styles.title}>{i18n.title}</span>
            <div className={styles.form}>
                <ProfileIcon />
                <span>{i18n.email}</span>
                <input className={styles.inputLogin} placeholder={i18n.email} />
                <span>{i18n.password}</span>
                <input
                    className={styles.inputLogin}
                    placeholder={i18n.password}
                    type="password"
                />
            </div>
            <Button onClick={navigateToMap} title={i18n.buttonTitle} />
            <LangSwitcher className={styles.lang} />
        </div>
    );
}
