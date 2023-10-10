import styled from 'styled-components/native';
import { ContainerStyledProps, ToastTextStyledProps } from './interfaces';

export const Container = styled.View<ContainerStyledProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 8px;
  padding: 20px;
  margin-top: 20px;
  width: 93%;
`;

export const ToastMessageContainer = styled.View`
  flex-direction: row;
`;

export const ToastText = styled.Text<ToastTextStyledProps>`
  color: ${({ color }) => color};
  font-weight: bold;
  margin-left: 10px;
`;
