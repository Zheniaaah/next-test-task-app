'use client';

import React, { useMemo } from 'react';

import { EmptyCard, TaskCard } from '@/components';
import { useGetTasks } from '@/hooks';
import { CATEGORIES } from '@/shared/data';
import { getFilteredTasks } from '@/utils';

export default function TaskList() {
  const { data: tasks, isLoading, isError } = useGetTasks();

  const maxItemsLength = useMemo(() => {
    if (!tasks || isLoading) return 3;

    const lengths = CATEGORIES.map((category) => {
      const categoryTasks = getFilteredTasks(tasks, category.id);

      return categoryTasks.length;
    });

    return Math.max(3, ...lengths);
  }, [tasks, isLoading]);

  if (isError) {
    return <div className="p-8 text-red-500">Ошибка при загрузке данных. Проверьте API.</div>;
  }

  return (
    <div className="no-scrollbar mt-7 grid h-full max-w-6xl grid-cols-[repeat(auto-fill,minmax(264px,1fr))] items-start gap-8 overflow-y-auto pb-20">
      {CATEGORIES.map((category) => {
        let content;
        const tasksColumn = getFilteredTasks(tasks, category.id);

        if (isLoading) {
          content = Array.from({ length: maxItemsLength }).map((_, i) => (
            <EmptyCard key={`empty-${category.id}-${i}`} animate />
          ));
        } else {
          const emptySlotsCount = Math.max(0, maxItemsLength - tasksColumn.length);

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
