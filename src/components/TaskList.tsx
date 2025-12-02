'use client';

import React, { useMemo, useRef } from 'react';

import { EmptyCard, TaskCard } from '@/components';
import { useGetTasks } from '@/hooks';
import { useGridColumns } from '@/hooks/use-grid-columns';
import { CATEGORIES } from '@/shared/data';
import { getFilteredTasks } from '@/utils';

export default function TaskList() {
  const { data: tasks, isLoading, isError } = useGetTasks();

  const containerRef = useRef<HTMLDivElement | null>(null);

  const columnsCount = useGridColumns(containerRef, { itemMinWidth: 264, gap: 32 });

  const categoriesWithMeta = useMemo(() => {
    if (!tasks || isLoading) {
      return CATEGORIES.map((category) => ({
        ...category,
        tasksColumn: [],
        targetLength: 3,
      }));
    }

    const catsWithTasks = CATEGORIES.map((category) => ({
      ...category,
      tasksColumn: getFilteredTasks(tasks, category.id),
    }));

    const processedCategories = [];

    for (let i = 0; i < catsWithTasks.length; i += columnsCount) {
      const rowChunk = catsWithTasks.slice(i, i + columnsCount);

      const maxInRow = Math.max(3, ...rowChunk.map((c) => c.tasksColumn.length));

      const rowWithTarget = rowChunk.map((cat) => ({
        ...cat,
        targetLength: maxInRow,
      }));

      processedCategories.push(...rowWithTarget);
    }

    return processedCategories;
  }, [tasks, isLoading, columnsCount]);

  if (isError) {
    return <div className="p-8 text-red-500">Ошибка при загрузке данных. Проверьте API.</div>;
  }

  return (
    <div
      ref={containerRef}
      className="no-scrollbar mt-7 grid h-full max-w-6xl grid-cols-[repeat(auto-fill,minmax(264px,1fr))] items-start gap-8 overflow-y-auto pb-20"
    >
      {categoriesWithMeta.map((category) => {
        let content;
        const tasksColumn = getFilteredTasks(tasks, category.id);

        if (isLoading) {
          content = Array.from({ length: category.targetLength }).map((_, i) => (
            <EmptyCard key={`empty-${category.id}-${i}`} animate />
          ));
        } else {
          const emptySlotsCount = Math.max(0, category.targetLength - tasksColumn.length);

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
