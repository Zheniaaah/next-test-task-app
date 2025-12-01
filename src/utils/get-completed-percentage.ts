import type { ITask } from '@/types';

export function getCompletedPercentage(tasks: ITask[] | undefined) {
  if (!tasks) return 0;

  const total = tasks.length;
  const completed = tasks.filter((task: ITask) => task.status === 'completed').length;
  return total === 0 ? 0 : Math.round((completed / total) * 100);
}
