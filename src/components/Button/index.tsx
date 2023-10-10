import React from 'react';
import { Container, Title } from './styles';
import { ButtonProps } from './interfaces';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

const Button: React.FC<ButtonProps> = ({
  title,
  isLoading = false,
  ...rest
}) => {
  const { colors } = useTheme();

  return (
    <Container {...rest}>
      {isLoading ? (
        <ActivityIndicator size="small" color={colors.primary} />
      ) : (
        <Title>{title}</Title>
      )}
    </Container>
  );
};

export default Button;
