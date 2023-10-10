import { ReactElement } from 'react';

export interface ModalProps {
  children?: ReactElement;
}

export interface ModalType {
  open: () => void;
  close: () => void;
}
