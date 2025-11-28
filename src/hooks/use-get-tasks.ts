import { useQuery } from '@tanstack/react-query';

import { fetchTasks } from '@/services';

export const useGetTasks = () => {
  return useQuery({
    queryKey: ['tasks'],
    queryFn: fetchTasks,
  });
};
