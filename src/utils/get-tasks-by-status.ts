import type { ITask, TaskStatus } from '@/types';

export function getTasksByStatus(tasks: ITask[] | undefined, status: TaskStatus) {
  return (tasks || []).filter((task) => task.status === status);
}
