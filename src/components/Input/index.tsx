import React from 'react';
import { Container, InputContainer, Label } from './styles';
import { InputProps } from './interfaces';

export const Input: React.FC<InputProps> = ({
  label,
  height = '50',
  ...rest
}) => {
  return (
    <Container>
      {!!label && <Label>{label}</Label>}
      <InputContainer {...rest} height={height} />
    </Container>
  );
};
