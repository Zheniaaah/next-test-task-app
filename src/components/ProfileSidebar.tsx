'use client';

import React from 'react';

import { AvatarProgress, Button } from '@/components';

export default function ProfileSidebar() {
  return (
    <aside className="flex h-full w-[312px] flex-col items-center bg-white px-6 py-6.5">
      <h2 className="mt-3.5 self-start text-xl font-medium">My Profile</h2>

      <p className="mt-1 self-start text-sm text-[#64C882]">75% completed your profile</p>

      <AvatarProgress
        value={75}
        size={100}
        strokeWidth={3}
        progressColor="#64C882"
        className="mt-9.5"
      >
        <div className="h-20 w-20 rounded-full bg-[#C4C4C4]" />
      </AvatarProgress>

      <h3 className="mt-4 text-base font-medium">User R.</h3>

      <p className="mt-2.5 text-sm text-[#AAAAAA]">Developer at White Digital</p>

      <hr className="mt-3 w-full border border-[#F5F6FA]" />

      <Button className="mt-auto w-full rounded-md bg-[#D23D3D] py-2 text-xs font-bold text-white transition hover:bg-[#B83232] active:scale-95">
        Logout
      </Button>
    </aside>
  );
}
