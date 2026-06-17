import { useState, useEffect, useMemo } from 'react';
import { type ExplorePageHook } from './ExplorePage.types';
import { MOCK_EXPLORE_TOPICS } from './ExplorePage.constants';
import { getProgressPercent } from './ExplorePage.utils';

export const useExplorePage = (): ExplorePageHook => {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1200);
        return () => clearTimeout(timer);
    }, []);

    const filteredTopics = useMemo(() => {
        return MOCK_EXPLORE_TOPICS.filter((topic) => {
            const matchesCategory = selectedCategory === 'All' || topic.category === selectedCategory;
            const matchesDifficulty = selectedDifficulty === 'All' || topic.difficulty === selectedDifficulty;
            return matchesCategory && matchesDifficulty;
        });
    }, [selectedCategory, selectedDifficulty]);

    const stats = useMemo(() => {
        const topicsAvailable = MOCK_EXPLORE_TOPICS.length;
        let totalProblems = 0;
        let totalSolved = 0;

        MOCK_EXPLORE_TOPICS.forEach((topic) => {
            totalProblems += topic.totalProblems;
            totalSolved += topic.problemsSolved;
        });

        const overallProgress = getProgressPercent(totalSolved, totalProblems);

        return {
            topicsAvailable,
            problemsSolved: totalSolved,
            overallProgress: Math.round(overallProgress),
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