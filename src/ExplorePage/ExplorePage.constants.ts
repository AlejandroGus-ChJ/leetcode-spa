import type { ExploreTopic } from './ExplorePage.types';

export const CATEGORIES = ['All', 'Core CS', 'Data Structures', 'Advanced Topics'];
export const DIFFICULTIES = ['all', 'beginner', 'intermediate', 'advanced'];

export const MOCK_EXPLORE_TOPICS: ExploreTopic[] = [
    {
        id: '1',
        title: 'Arrays & Hashing',
        description: 'Master fundamental array manipulations, hashing techniques, two-pointer approaches, and sliding window strategies commonly found in interviews.',
        icon: 'MenuBookOutlined',
        category: 'Data Structures',
        difficulty: 'beginner',
        problemsSolved: 4,
        totalProblems: 15,
    },
    {
        id: '2',
        title: 'Dynamic Programming',
        description: 'Learn to solve complex problems by breaking them down into simpler subproblems, applying memoization and tabulation strategies efficiently.',
        icon: 'TrendingUpOutlined',
        category: 'Advanced Topics',
        difficulty: 'advanced',
        problemsSolved: 0,
        totalProblems: 10,
    },
    {
        id: '3',
        title: 'Advanced SQL Querying',
        description: 'Master complex queries, window functions, and database index tuning for robust performance.',
        icon: 'EmojiEventsOutlined',
        category: 'Core CS',
        difficulty: 'intermediate',
        problemsSolved: 1,
        totalProblems: 5,
    }
];