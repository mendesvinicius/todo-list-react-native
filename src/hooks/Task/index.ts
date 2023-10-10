import { useCallback } from 'react';
import { TaskApi } from '../../services/task';
import useStore from '../../store';
import { Task } from './interfaces';
import { StorageManager } from '../../utils/storage';
import { useNetInfo } from '@react-native-community/netinfo';

const email = StorageManager.getEmail();

const useTask = () => {
  const { isConnected } = useNetInfo();
  const {
    tasks,
    task,
    meta,
    updateTasks,
    updateCheckTask,
    createTask,
    getTask,
    deleteTask,
  } = useStore();

  const fetchTask = useCallback(async (page: number) => {
    try {
      const { items, meta } = await TaskApi.findAll(email, page);
      updateTasks(items, meta);
    } catch (error) {
      throw error;
    }
  }, []);

  const create = async ({ title, description, check, category }: Task) => {
    try {
      const task = await TaskApi.create({
        email,
        title,
        description,
        check,
        category,
      });
      createTask(task);
    } catch (error) {
      throw error;
    }
  };

  const update = (id: string, check: boolean) => {
    try {
      TaskApi.update(id, check);
      updateCheckTask(id, check);
    } catch (error) {
      throw error;
    }
  };

  const taskDelete = async (id: string) => {
    try {
      await TaskApi.delete(id);
      deleteTask(id);
    } catch (error) {
      throw error;
    }
  };

  return {
    fetchTask,
    tasks,
    task,
    create,
    update,
    getTask,
    taskDelete,
    meta,
  };
};

export { useTask };
