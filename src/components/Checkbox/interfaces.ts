export interface CheckBoxProps {
  checked: boolean;
  onChange?: (newValue: boolean) => void;
}

export interface CheckBoxStyledProps {
  checked?: boolean;
  checkedColor?: string;
  uncheckedColor?: string;
}
