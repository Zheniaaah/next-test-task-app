import { useEffect, useState } from 'react';

export function useCurrentDate() {
  const [date, setDate] = useState<{ dayName: string; fullDate: string } | null>(null);

  useEffect(() => {
    const now = new Date();

    const dayName = now.toLocaleDateString('en-US', { weekday: 'long' });

    const fullDate = now.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

    setDate({ dayName, fullDate });
  }, []);

  return date;
}
