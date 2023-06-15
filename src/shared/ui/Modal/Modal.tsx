import { classNames } from 'shared/lib/classNames/classNames';
import {
    MouseEventHandler,
    ReactNode,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import styles from './Modal.module.scss';

interface ModalProps {
className?: string
children?: ReactNode
isOpen?: boolean
onClose?: () => void
}

export function Modal({
    className,
    children,
    isOpen,
    onClose,
}: ModalProps) {
    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const handleClose = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, 300);
        }
    }, [onClose]);

    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                handleClose();
            }
        },
        [handleClose],
    );

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, [handleKeyDown, isOpen]);

    const stopPropagation: MouseEventHandler<HTMLDivElement> = (e) => {
        e.stopPropagation();
    };

    const mods: Record<string, boolean> = {
        [styles.opened]: isOpen,
        [styles.closing]: isClosing,
    };

    return (
        <Portal>
            <div className={classNames(styles.modal, mods, [className])}>
                <div className={styles.overlay} onClick={handleClose}>
                    <div
                        className={styles.content}
                        onClick={stopPropagation}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
}
