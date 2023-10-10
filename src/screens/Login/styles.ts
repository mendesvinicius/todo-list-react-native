import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: center;
`;

export const Welcome = styled.View`
  margin-bottom: 30px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 60px;
  font-weight: bold;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.textListPrimary};
  font-size: 20px;
  font-weight: 500;
`;

export const Access = styled.View``;
