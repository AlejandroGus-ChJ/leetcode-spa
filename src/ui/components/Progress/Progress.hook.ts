export const useProgress = (value?: number) => {
  const isDeterminate = value !== undefined;
  return { isDeterminate };
};