'use client';

import * as React from 'react';

import { cn } from '@/utils';

type Props = {
  value: number;
  size: number;
  strokeWidth?: number;
  trackWidth?: number;
  contentInset?: number;
  trackColor?: string;
  progressColor?: string;
  className?: string;
  children?: React.ReactNode;
  ariaLabel?: string;
};

export default function CircularProgress({
  value,
  size = 112,
  strokeWidth = 6,
  trackWidth,
  contentInset = 4,
  trackColor = '#fff',
  progressColor,
  className,
  children,
  ariaLabel = 'progress',
}: Props) {
  const pct = Math.max(0, Math.min(100, value));
  const sw = strokeWidth;
  const tw = trackWidth ?? sw;
  const maxW = Math.max(sw, tw);

  const r = (size - maxW) / 2;
  const C = 2 * Math.PI * r;
  const offset = C * (1 - pct / 100);

  const innerSize = Math.max(0, size - 2 * maxW - 2 * contentInset);

  return (
    <div
      className={cn('relative grid place-items-center', className)}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox={`0 0 ${size} ${size}`}
        width={size}
        height={size}
        className="absolute inset-0 -rotate-[115deg]"
        role="img"
        aria-label={`${ariaLabel}: ${pct}%`}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={trackColor}
          strokeWidth={tw}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={progressColor ?? 'currentColor'}
          strokeWidth={sw}
          strokeLinecap="round"
          strokeDasharray={C}
          strokeDashoffset={offset}
        />
      </svg>

      <div
        className="grid place-items-center rounded-full"
        style={{ width: innerSize, height: innerSize }}
      >
        {children}
      </div>
    </div>
  );
}
