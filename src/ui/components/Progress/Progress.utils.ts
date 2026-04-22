export const formatProgressValue = (value: number | undefined): string => {
  if (value === undefined) return '0%';
  return `${Math.round(value)}%`;
};