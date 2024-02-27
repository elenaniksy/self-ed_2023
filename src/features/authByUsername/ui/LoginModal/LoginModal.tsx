import { Modal } from 'shared/ui/Modal/Modal';
import { classNames } from 'shared/lib/classNames/classNames';
import { LoginForm } from '../LoginForm/LoginForm';

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
        <LoginForm />
    </Modal>
);
