import { Task } from '../../hooks/Task/interfaces';

export interface ListProps extends Task {
  openModalListTask: () => void;
}

export interface TextStyledProps {
  checked: boolean;
}
