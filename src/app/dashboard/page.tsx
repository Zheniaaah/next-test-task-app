import React from 'react';

import { PageTitle, TaskList } from '@/components';

export default function DashboardPage() {
  return (
    <section className="h-full flex-1 px-8 py-10">
      <PageTitle title="My Tasks" />

      <TaskList />
    </section>
  );
}
