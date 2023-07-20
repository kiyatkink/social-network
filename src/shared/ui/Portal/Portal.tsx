import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children?: ReactNode,
    relative?: Element
}
export const Portal: FC<PortalProps> = (props) => {
  const { children, relative = document.body } = props
  return createPortal(children, relative)
};
