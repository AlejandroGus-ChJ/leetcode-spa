export interface TopicCardProps {
  id: number;
  title: string;
  solved: number;
  total: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
}

export interface ExplorePageState {
  selectedCategory: string;
  selectedDifficulty: string;
  searchQuery: string;
}