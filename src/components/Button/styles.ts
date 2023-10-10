import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity<TouchableOpacityProps>`
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.secondary};
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
`;
