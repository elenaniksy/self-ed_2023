import { classNames } from 'shared/lib/classNames/classNames';

import type { FC } from 'react';
import React, {
    useCallback, useEffect, useRef, useState,
} from 'react';
import { IProps } from 'app/types/IProps';
import { Portal } from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './Modal.module.scss';

interface ModalProps extends IProps {
  className?: string;
  isOpen: boolean;
  onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal: FC<ModalProps> = ({
    className = '', children, isOpen, onClose,
}) => {
    const { theme } = useTheme();
    const [isClosing, setIsClosing] = useState<boolean>(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    const onCloseHandler = useCallback((): void => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const onKeyDown = useCallback((e: KeyboardEvent): void => {
        if (e.key === 'Escape') {
            onCloseHandler();
        }
    }, [onCloseHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    return (
        <Portal element={document.body}>
            <div className={classNames(cls.Modal, mods, [className, theme])}>
                <div className={cls.overlay} onClick={onCloseHandler}>
                    <div
                        className={cls.content}
                        onClick={onContentClick}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
