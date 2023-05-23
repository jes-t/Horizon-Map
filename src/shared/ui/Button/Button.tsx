import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

interface ButtonProps {
    onClick?: ()=> void
    title: string
    className?: string
    dataTestProp?: string
}

export function Button({
    onClick = () => {}, title, className = '', dataTestProp = 'button',
}
:ButtonProps) {
    return (
        <button
            className={classNames(
                styles.CustomButton,
                {},
                [className],
            )}
            type="button"
            onClick={onClick}
            data-testid={dataTestProp}
        >
            {title}
        </button>
    );
}
