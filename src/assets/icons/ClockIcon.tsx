import React from 'react';

import type { ISVGProps } from '@/types';
import { cn } from '@/utils';

export default function ClockIcon({ className, size = 16, ...props }: ISVGProps) {
  return (
    <svg
      className={cn(className)}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="8" cy="8" r="5.6" stroke="currentColor" strokeWidth="0.8" />
      <path
        d="M8 5.33334V8.42599L10 9.33334"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
