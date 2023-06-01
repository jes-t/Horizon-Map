import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

export enum ButtonTheme {
    PRIMARY = 'primary',
    CLEAR = 'clear',
    OUTLINE = 'outline'
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: ()=> void
    title: string
    className?: string
    dataTestProp?: string
    theme?: ButtonTheme
}

export function Button({
    children,
    onClick = () => {},
    title, className = '',
    dataTestProp = 'button',
    theme,
}
:ButtonProps) {
    return (
        <button
            className={classNames(
                styles.CustomButton,
                { [styles[theme]]: true },
                [className],
            )}
            type="button"
            onClick={onClick}
            data-testid={dataTestProp}
        >
            {children}
            {title}
        </button>
    );
}
