import { Modal } from 'shared/ui/Modal/Modal';
import { classNames } from 'shared/lib/classNames/classNames';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';
import {
    LoginFormAsync,
} from '../LoginForm/LoginForm.async';

interface ILoginModal {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export const LoginModal = ({ isOpen, onClose, className = '' }: ILoginModal) => (
    <Modal
        className={classNames('', {}, [className])}
        isOpen={isOpen}
        onClose={onClose}
        lazy
    >
        <Suspense fallback={<Loader />}>
            <LoginFormAsync onClose={onClose} />
        </Suspense>
    </Modal>
);
