import styled from 'styled-components/native';
import { InputStyledProps } from './interfaces';

export const Container = styled.View`
  margin-bottom: 20px;
`;

export const InputContainer = styled.TextInput<InputStyledProps>`
  border-radius: 5px;
  border: ${({ theme: { colors } }) => `0.912px solid ${colors.gray['400']}`};
  background: ${({ theme: { colors } }) => colors.primary};
  height: ${({ height }) => height}px;
  padding: 10px;
  color: ${({ theme: { colors } }) => colors.secondary};
`;

export const Label = styled.Text`
  color: ${({ theme: { colors } }) => colors.textPrimary};
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 5px;
`;
