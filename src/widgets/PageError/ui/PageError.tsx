import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './PageError.module.scss';

export function PageError() {
    const { t } = useTranslation();
    const i18n = {
        title: t('error_page.title'),
        titleBtn: t('error_page.title_button'),
    };

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };
    return (
        <div className={classNames(styles.PageError, {}, [])}>
            <h2>{i18n.title}</h2>
            <p>
                <button onClick={reloadPage} type="button">
                    {i18n.titleBtn}
                </button>
            </p>
        </div>
    );
}
