export const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Easy':
      return 'success';
    case 'Medium':
      return 'warning';
    case 'Hard':
      return 'error';
    default:
      return 'default';
  }
};

export const calculateProgress = (solved: number, total: number) => {
  return (solved / total) * 100;
};
