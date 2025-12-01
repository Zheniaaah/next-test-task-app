import React from 'react';

import { ClockIcon } from '@/assets/icons';
import type { ITask } from '@/types';
import { cn, formatDate } from '@/utils';

interface IProps {
  task: ITask;
}

export default function TaskCard({ task }: IProps) {
  return (
    <div className="flex h-54 flex-col rounded-lg bg-white px-4 py-4.5">
      <div className="flex items-center justify-between">
        <h3 className="truncate text-base font-medium">{task.title}</h3>

        <button className="cursor-pointer text-[#AAAAAA]">•••</button>
      </div>

      <p className="mt-5.5 text-sm text-wrap text-[#12121299]">{task.description}</p>

      <div className="mt-auto flex items-center justify-between">
        <div
          className={cn(
            'flex h-7 w-fit items-center gap-1 rounded px-2 py-1.5',
            task.status === 'completed' ? 'bg-[#F5F6F8]' : 'bg-[#64C882]',
          )}
        >
          <ClockIcon
            className={cn(task.status === 'completed' ? 'text-[#DDDDDD]' : 'text-white')}
          />

          <span
            className={cn('text-xs', task.status === 'completed' ? 'text-[#DDDDDD]' : 'text-white')}
          >
            {formatDate(task.createdAt)}
          </span>
        </div>

        <div className="flex -space-x-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i + 10} className="h-8 w-8 rounded-full border border-white bg-[#C4C4C4]" />
          ))}
        </div>
      </div>
    </div>
  );
}
