export type DifficultyType = 'beginner' | 'intermediate' | 'advanced';

export interface ExploreTopic {
    id: string;
    title: string;
    description: string;
    icon: string; // Internal icon identifier (e.g., 'MenuBook', 'TrendingUp')
    category: string;
    difficulty: DifficultyType;
    problemsSolved: number;
    totalProblems: number;
}

export interface ExplorePageHook {
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
    selectedDifficulty: string;
    setSelectedDifficulty: (difficulty: string) => void;
    filteredTopics: ExploreTopic[];
    isLoading: boolean;
    stats: {
        topicsAvailable: number;
        problemsSolved: number;
        overallProgress: number;
    };
}