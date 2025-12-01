import type { ITask, TaskStatus } from '@/types';

export function getFilteredTasks(tasks: ITask[] = [], status: TaskStatus) {
  const filteredTasks = tasks.filter((task) => task.status === status);

  return filteredTasks.sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
}
