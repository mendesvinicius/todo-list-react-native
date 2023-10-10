import styled from 'styled-components/native';
import { CheckBoxStyledProps } from './interfaces';

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Box = styled.View<CheckBoxStyledProps>`
  width: 24px;
  height: 24px;
  border-width: 2px;
  border-radius: 4px;
  border-color: ${({ checked, theme: { colors } }) =>
    checked ? colors.secondary : colors.gray['400']};
  background-color: ${({ checked, theme: { colors } }) =>
    checked ? colors.secondary : colors.primary};
  justify-content: center;
  align-items: center;
`;
