import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
  elementTo?: HTMLElement;
}

export const Portal = (props: PortalProps) => {
    const { children, elementTo = document.body } = props;

    return createPortal(children, elementTo);
};
