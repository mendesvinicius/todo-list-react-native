import { TextInputProps } from 'react-native';

export interface InputProps extends TextInputProps {
  label: string;
  height?: string;
}

export interface InputStyledProps {
  height: string;
}
