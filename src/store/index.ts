import { create } from 'zustand';
import { Meta, Store } from './interfaces';
import { Task } from '../hooks/Task/interfaces';
import { persist } from 'zustand/middleware';
import { persistConfig } from './persist';

const PAGE = 1;

const useStore = create<Store>()(
  persist(
    set => ({
      tasks: [],
      task: undefined,
      meta: undefined,
      updateTasks: (tasks: Task[], meta: Meta) => {
        set(state => {
          let newTasks = tasks;
          if (meta.currentPage !== PAGE) newTasks = [...state.tasks, ...tasks];

          return {
            ...state,
            tasks: newTasks,
            meta,
          };
        });
      },
      updateCheckTask: (id: string, check: boolean) => {
        set(state => {
          const { tasks } = state;

          const taskCheck = tasks;

          const task = taskCheck.find(task => task.id === id);

          if (!task) return {};

          task.check = check;

          return {
            ...state,
            tasks: taskCheck,
          };
        });
      },
      createTask: (task: Task) => {
        set(state => ({ ...state, tasks: [task, ...state.tasks] }));
      },
      getTask: (task: Task) => {
        set(state => ({ ...state, task }));
      },
      deleteTask: (id: string) => {
        set(state => {
          const newTask = state.tasks.filter(task => task.id !== id);
          return { ...state, tasks: newTask };
        });
      },
    }),
    persistConfig,
  ),
);

export default useStore;
