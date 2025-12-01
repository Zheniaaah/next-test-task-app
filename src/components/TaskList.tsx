'use client';

import React from 'react';

import { EmptyCard, TaskCard } from '@/components';
import { useGetTasks } from '@/hooks';
import { CATEGORIES } from '@/shared/data';
import { getTasksByStatus } from '@/utils';

export default function TaskList() {
  const { data: tasks, isLoading, isError } = useGetTasks();

  if (isError) {
    return <div className="p-8 text-red-500">Ошибка при загрузке данных. Проверьте API.</div>;
  }

  return (
    <div className="mt-7 grid max-w-6xl grid-cols-1 items-start gap-8 md:grid-cols-2 lg:grid-cols-4">
      {CATEGORIES.map((category) => {
        let content;
        const tasksColumn = tasks && !isLoading ? getTasksByStatus(tasks, category.id) : [];

        if (isLoading) {
          content = Array.from({ length: 3 }).map((_, i) => (
            <EmptyCard key={`empty-${category.id}-${i}`} animate />
          ));
        } else {
          const emptySlotsCount = Math.max(0, 3 - tasksColumn.length);

          content = (
            <>
              {tasksColumn.map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}

              {Array.from({ length: emptySlotsCount }).map((_, i) => (
                <EmptyCard key={`empty-${category.id}-${i}`} />
              ))}
            </>
          );
        }

        return (
          <div key={category.id} className="flex flex-col gap-4">
            <h2 className="flex items-center justify-between text-base font-medium">
              {category.title} {!isLoading && `(${tasksColumn.length})`}
            </h2>

            <div className="flex flex-col gap-6">{content}</div>
          </div>
        );
      })}
    </div>
  );
}
