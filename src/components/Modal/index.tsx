import React, {
  ForwardRefRenderFunction,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { Modal as ModalNative } from 'react-native';
import { Container, StyledModal } from './styles';
import { ModalProps, ModalType } from './interfaces';

const BaseModal: ForwardRefRenderFunction<ModalType, ModalProps> = (
  { children },
  ref,
) => {
  const [visible, setVisible] = useState(false);
  const modalRef = useRef(null);

  const open = () => setVisible(true);
  const close = () => setVisible(false);

  useImperativeHandle(ref, () => ({ open, close }));

  return (
    <ModalNative
      onRequestClose={close}
      animationType="fade"
      visible={visible}
      transparent={true}
      ref={modalRef}>
      <Container onPress={close} />
      <StyledModal>{children}</StyledModal>
    </ModalNative>
  );
};

export type Modal = ModalType;
export const Modal = forwardRef(BaseModal);
