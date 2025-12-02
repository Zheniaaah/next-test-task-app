import { type RefObject, useEffect, useState } from 'react';

interface IGridConfig {
  itemMinWidth: number;
  gap: number;
}

export function useGridColumns<T extends HTMLElement>(
  containerRef: RefObject<T | null>,
  config: IGridConfig,
) {
  const [columnsCount, setColumnsCount] = useState(4);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width = entry.contentRect.width;

        const cols = Math.floor((width + config.gap) / (config.itemMinWidth + config.gap));
        setColumnsCount(Math.max(1, cols));
      }
    });

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [config.itemMinWidth, config.gap, containerRef]);

  return columnsCount;
}
