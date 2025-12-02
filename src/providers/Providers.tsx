import React from 'react';

import { QueryProvider, UserProvider } from '@/providers';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryProvider>
      <UserProvider>{children}</UserProvider>
    </QueryProvider>
  );
}
