import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const deviceHeight = Dimensions.get('window').height;

export const Container = styled.TouchableOpacity`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.darkOpacity};
`;

export const StyledModal = styled.View`
  position: absolute;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 30px 20px 30px 20px;
`;
