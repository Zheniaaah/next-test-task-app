export type TaskStatus = 'to-do' | 'in-progress' | 'review' | 'completed';

export interface ITask {
  id: string;
  createdAt: string;
  title: string;
  description: string;
  status: TaskStatus;
}
