export const normalizeValue = (value: number | undefined): number => {
  if (value === undefined) return 0;
  return Math.min(Math.max(value, 0), 100);
};
