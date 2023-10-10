import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Box, Wrapper } from './styles';
import { CheckBoxProps } from './interfaces';
import { useTheme } from 'styled-components';

const CheckBox: React.FC<CheckBoxProps> = ({ checked = false }) => {
  const { colors } = useTheme();
  return (
    <Wrapper>
      <Box checked={checked}>
        {checked ? (
          <Icon size={20} name="check" color={colors.primary} />
        ) : null}
      </Box>
    </Wrapper>
  );
};

export default CheckBox;
