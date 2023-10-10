import styled from 'styled-components/native';
import { TextStyledProps } from './interfaces';

export const Container = styled.TouchableOpacity`
  padding: 20px;
  flex-direction: row;
  align-items: center;
  align-self: stretch;
`;

export const ContainerTitle = styled.View`
  flex-direction: column;
  margin-left: 20px;
`;

export const Title = styled.Text<TextStyledProps>`
  color: ${({ theme }) => theme.colors.textListPrimary};
  display: flex;
  margin-bottom: 10px;
  text-decoration: ${({ checked }) => (checked ? 'line-through' : 'none')};
  text-decoration-color: ${({ theme }) => theme.colors.textListPrimary};
`;

export const Reminder = styled.Text<TextStyledProps>`
  color: ${({ theme }) => theme.colors.textListSecondary};
  font-family: SF Pro Text;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: -0.063px;
  text-decoration: ${({ checked }) => (checked ? 'line-through' : 'none')};
  text-decoration-color: ${({ theme }) => theme.colors.textListSecondary};
`;

export const SkeletonList = styled.View`
  background-color: ${({ theme }) => theme.colors.gray['300']};
  height: 50px;
  border-radius: 40px;
  margin-bottom: 20px;
`;
