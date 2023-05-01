import { classNames } from 'shared/lib/classNames/classNames';
import Spinner from 'shared/ui/Spinner/Spinner';
import styles from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string
}

export function PageLoader({ className }:PageLoaderProps) {
    return (
        <div className={classNames(styles.PageLoader, {}, [className])}>
            <Spinner />
        </div>
    );
}
