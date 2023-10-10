import styled from 'styled-components/native';
import { StatusStyledProps } from './interfaces';

export const Container = styled.View`
  flex-direction: row;
  min-height: 150px;
  justify-content: space-around;
`;

export const ContainerInfo = styled.View`
  flex: 1;
`;

export const ContainerTitle = styled.View``;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 24px;
  font-weight: bold;
`;

export const ContainerDescription = styled.View`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ContainerStatus = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Status = styled.View<StatusStyledProps>`
  background: ${({ background }) => background};
  padding: 8px;
  margin-left: 5px;
  border-radius: 5px;
`;

export const StatusText = styled.Text`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 600;
  color: #262626;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 14px;
`;

export const ButtonDelete = styled.TouchableOpacity``;
