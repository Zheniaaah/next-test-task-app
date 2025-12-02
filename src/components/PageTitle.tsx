'use client';

import React from 'react';

import { MobileNavbar } from '@/components';
import { useCurrentDate } from '@/hooks';

interface IProps {
  title: string;
}

export default function PageTitle({ title }: IProps) {
  const date = useCurrentDate();

  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-medium">{title}</h1>

        {!date ? (
          <div className="h-5 w-45 animate-pulse rounded-md bg-gray-200" />
        ) : (
          <div className="flex items-center gap-1 text-sm">
            <span className="text-[#64C882]">{date.dayName},</span>

            <span className="text-[#AAAAAA]">{date.fullDate}</span>
          </div>
        )}
      </div>

      <MobileNavbar />
    </div>
  );
}
