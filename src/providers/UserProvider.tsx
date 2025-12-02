'use client';

import React, { createContext, useContext, useMemo, useState } from 'react';

import { formatName } from '@/utils';

interface IUserContext {
  username: string;
  setUsername: (name: string) => void;
  shortUsername: string;
}

const UserContext = createContext<IUserContext | undefined>(undefined);

export default function UserProvider({ children }: { children: React.ReactNode }) {
  const [username, setUsername] = useState<string>('User Random');

  const shortUsername = useMemo(() => formatName(username), [username]);

  return (
    <UserContext.Provider value={{ username, setUsername, shortUsername }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
}
