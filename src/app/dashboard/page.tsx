import React from 'react';

import { PageTitle, TaskList } from '@/components';

export default function DashboardPage() {
  return (
    <>
      <PageTitle title="My Tasks" />

      <TaskList />
    </>
  );
}
