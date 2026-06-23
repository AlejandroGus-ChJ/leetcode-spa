import { type DifficultyType } from './ExplorePage.types';

// Devuelve el color de MUI según la dificultad
export const getDifficultyColor = (
  difficulty: DifficultyType
): 'success' | 'warning' | 'error' | 'default' => {
  switch (difficulty.toLowerCase()) {
    case 'beginner':
      return 'success';
    case 'intermediate':
      return 'warning';
    case 'advanced':
      return 'error';
    default:
      return 'default';
  }
};

// Calcula el porcentaje de progreso sin romper si total es 0
export const getProgressPercent = (progress: number, total: number): number => {
  if (!total || total === 0) return 0;
  return (progress / total) * 100;
};
