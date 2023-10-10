import { Task } from '../hooks/Task/interfaces';

export type Store = {
  tasks: Task[];
  task: Task | undefined;
  meta: Meta | undefined;
  updateTasks: (tasks: Task[], meta: Meta) => void;
  updateCheckTask: (id: string, check: boolean) => void;
  createTask: (task: Task) => void;
  getTask: (task: Task) => void;
  deleteTask: (id: string) => void;
};

export interface Meta {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}
