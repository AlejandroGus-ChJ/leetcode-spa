export type DifficultyType = 'beginner' | 'intermediate' | 'advanced';

export type DifficultyFilter = DifficultyType | 'All';

export interface ExploreTopic {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  difficulty: DifficultyType;
  problemsSolved: number;
  totalProblems: number;
}

export interface ExplorePageStats {
  topicsAvailable: number;
  problemsSolved: number;
  overallProgress: number;
}

export interface ExplorePageHook {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;

  selectedDifficulty: DifficultyFilter;
  setSelectedDifficulty: (difficulty: DifficultyFilter) => void;

  filteredTopics: ExploreTopic[];
  isLoading: boolean;
  stats: ExplorePageStats;
}
