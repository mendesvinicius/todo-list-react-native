import { ToastProps } from 'react-native-toast-message';
import { Container, ToastMessageContainer, ToastText } from './styles';
import React from 'react';
import { CustomToastProps } from './interfaces';

export const VISIBILITY_TIME_DEFAULT = 3000;

const CustomToast = ({ backgroundColor, color, text1 }: CustomToastProps) => {
  return (
    <Container backgroundColor={backgroundColor}>
      <ToastMessageContainer>
        <ToastText color={color}>{text1}</ToastText>
      </ToastMessageContainer>
    </Container>
  );
};

export const toastConfig = {
  error: (props: ToastProps) => (
    <CustomToast
      {...(props as CustomToastProps)}
      backgroundColor="#FDE3E9"
      color="#E13F3D"
    />
  ),
};
