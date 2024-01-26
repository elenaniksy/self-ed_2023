import { IProps } from 'app/types/IProps';
import { createPortal } from 'react-dom';

interface PortalProps extends IProps {
  element?: HTMLElement;
}

export const Portal = (props: PortalProps) => {
    const {
        children,
        element = document.body,
    } = props;

    return createPortal(children, element);
};
