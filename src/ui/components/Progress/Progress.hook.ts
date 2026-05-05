import { useMemo } from 'react';

import { normalizeValue } from './Progress.utils';

export const useProgress = (value?: number) => {
  const normalizedValue = useMemo(() => normalizeValue(value), [value]);

  return {
    normalizedValue,
  };
};
