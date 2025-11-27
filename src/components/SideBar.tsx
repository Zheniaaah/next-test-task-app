'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { NAV_ITEMS } from '@/shared/data/navbar.data';
import { cn } from '@/utils';

export default function SideBar() {
  const pathname = usePathname();

  return (
    <aside className="flex w-[220px] flex-col gap-10 bg-white px-7 py-9">
      <div className="mt-5 flex items-center gap-3">
        <div className="flex size-8 items-center justify-center rounded-full bg-[#FF9F24] text-white">
          <span className="text-lg font-medium">C</span>
        </div>

        <span className="text-xl font-semibold uppercase">TESTAPP</span>
      </div>

      <nav className="flex flex-col gap-3">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex items-center gap-2.5',
              pathname === item.href ? 'text-[#64C882]' : 'text-[#AAAAAA] hover:text-[#64C882]',
            )}
          >
            <item.icon />

            <span>{item.value}</span>
          </Link>
        ))}
      </nav>

      <footer className="mt-auto flex gap-3">
        <div className="size-8 rounded-full bg-[#C4C4C4]" />
        <div className="flex flex-col justify-between">
          <span className="text-[12px] text-black">User R.</span>
          <span className="text-[10px] text-[#AAAAAA]">test-mail@email.com</span>
        </div>
      </footer>
    </aside>
  );
}
