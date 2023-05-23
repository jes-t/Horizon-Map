import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
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
                <Button onClick={reloadPage} title={i18n.titleBtn} />
            </p>
        </div>
    );
}
