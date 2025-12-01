import React from 'react';

import { cn } from '@/utils';

interface IProps {
  animate?: boolean;
}

export default function EmptyCard({ animate = false }: IProps) {
  return (
    <div
      className={cn(
        'flex h-54 items-center justify-center rounded-lg border-2 border-dashed border-[#AAAAAA]',
        animate ? 'animate-pulse' : 'opacity-50',
      )}
    ></div>
  );
}
