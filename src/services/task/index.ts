import { Task } from '../../hooks/Task/interfaces';
import { getClient } from './client';

class TaskApi {
  public static async findAll(email: string, page: number) {
    try {
      const { data: tasksData } = await getClient().get(`api/tasks/${email}`, {
        params: { page },
      });
      return tasksData;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public static async create(taskBody: Task): Promise<Task> {
    try {
      const { data: taskData } = await getClient().post(`api/tasks/`, taskBody);
      return taskData;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public static update(id: string, check: boolean) {
    try {
      getClient().put(`api/tasks/${id}`, { check });
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public static async delete(id: string) {
    try {
      await getClient().delete(`api/tasks/${id}`);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export { TaskApi };
