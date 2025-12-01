import React from 'react';

import { QueryProvider } from '@/providers';

export default function Providers({ children }: { children: React.ReactNode }) {
  return <QueryProvider>{children}</QueryProvider>;
}
