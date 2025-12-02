import React from 'react';

import { PageTitle, ProfileForm, ProfileSidebar } from '@/components';

export default function SettingsPage() {
  return (
    <div className="flex h-full justify-between">
      <section className="flex-1 px-8 py-10">
        <PageTitle title="Settings" />

        <ProfileForm />
      </section>

      <ProfileSidebar />
    </div>
  );
}
