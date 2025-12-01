import React from 'react';

import { PageTitle, ProfileSidebar } from '@/components';

export default function SettingsPage() {
  return (
    <div className="flex h-full justify-between">
      <section className="px-8 py-10">
        <PageTitle title="Settings" />
      </section>

      <ProfileSidebar />
    </div>
  );
}
