/**
 * Normalizes the progress value between 0 and 100
 */
export const normalizeValue = (value: number | undefined): number => {
  if (value === undefined) return 0;
  return Math.min(Math.max(value, 0), 100);
};