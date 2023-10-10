import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  height: 100px;
`;

export const Title = styled.Text`
  color: ${({ theme: { colors } }) => colors.secondary};
  text-align: center;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
`;
