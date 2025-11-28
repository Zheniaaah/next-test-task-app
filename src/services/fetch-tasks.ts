import type { ITask } from '@/types';

import { api } from './api';

export async function fetchTasks(): Promise<ITask[]> {
  const { data } = await api.get<ITask[]>('/tasks');

  return data;
}
