import { useState, useEffect, useMemo } from 'react';

import { MOCK_EXPLORE_TOPICS } from './ExplorePage.constants';
import { type ExplorePageHook, type DifficultyFilter } from './ExplorePage.types';
import { getProgressPercent } from './ExplorePage.utils';

export const useExplorePage = (): ExplorePageHook => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyFilter>('All');

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const filteredTopics = useMemo(() => {
    return MOCK_EXPLORE_TOPICS.filter((topic) => {
      const matchesCategory = selectedCategory === 'All' || topic.category === selectedCategory;

      const matchesDifficulty =
        selectedDifficulty === 'All' || topic.difficulty === selectedDifficulty;

      return matchesCategory && matchesDifficulty;
    });
  }, [selectedCategory, selectedDifficulty]);

  const stats = useMemo(() => {
    const topicsAvailable = MOCK_EXPLORE_TOPICS.length;

    const totalProblems = MOCK_EXPLORE_TOPICS.reduce((acc, topic) => acc + topic.totalProblems, 0);

    const totalSolved = MOCK_EXPLORE_TOPICS.reduce((acc, topic) => acc + topic.problemsSolved, 0);

    return {
      topicsAvailable,
      problemsSolved: totalSolved,
      overallProgress: Math.round(getProgressPercent(totalSolved, totalProblems)),
    };
  }, []);

  return {
    selectedCategory,
    setSelectedCategory,
    selectedDifficulty,
    setSelectedDifficulty,
    filteredTopics,
    isLoading,
    stats,
  };
};
