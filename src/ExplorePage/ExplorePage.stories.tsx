import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ExplorePage } from './ExplorePage';

const meta: Meta<typeof ExplorePage> = {
    title: 'Pages/ExplorePage',
    component: ExplorePage,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof ExplorePage>;

const mockStats = {
    topicsAvailable: 8,
    problemsSolved: 12,
    overallProgress: 25,
};

const mockTopics = [
    {
        id: '1',
        title: 'Arrays & Hashing',
        description: 'Master core array concepts',
        icon: 'MenuBookOutlined',
        category: 'Data Structures',
        difficulty: 'beginner',
        problemsSolved: 4,
        totalProblems: 15,
    },
    {
        id: '2',
        title: 'Advanced SQL Querying',
        description: 'Master complex queries',
        icon: 'EmojiEvents',
        category: 'Database',
        difficulty: 'advanced',
        problemsSolved: 0,
        totalProblems: 5,
    },
];

export const Predeterminado: Story = {
    name: 'Predeterminado',
    render: () => (
        <ExplorePage mockDataForStorybook={{
            selectedCategory: 'All',
            setSelectedCategory: () => { },
            selectedDifficulty: 'all',
            setSelectedDifficulty: () => { },
            filteredTopics: mockTopics,
            stats: mockStats,
            isLoading: false,
        }} />
    ),
};

export const FiltradoPorCategoría: Story = {
    name: 'FiltradoPorCategoría',
    render: () => (
        <ExplorePage mockDataForStorybook={{
            selectedCategory: 'Data Structures',
            setSelectedCategory: () => { },
            selectedDifficulty: 'all',
            setSelectedDifficulty: () => { },
            filteredTopics: mockTopics.filter(t => t.category === 'Data Structures'),
            stats: mockStats,
            isLoading: false,
        }} />
    ),
};

export const EstadoVacío: Story = {
    name: 'EstadoVacío',
    render: () => (
        <ExplorePage mockDataForStorybook={{
            selectedCategory: 'Advanced Topics',
            setSelectedCategory: () => { },
            selectedDifficulty: 'advanced',
            setSelectedDifficulty: () => { },
            filteredTopics: [],
            stats: mockStats,
            isLoading: false,
        }} />
    ),
};

export const EstadoCargando: Story = {
    name: 'EstadoCargando',
    render: () => (
        <ExplorePage mockDataForStorybook={{
            selectedCategory: 'All',
            setSelectedCategory: () => { },
            selectedDifficulty: 'all',
            setSelectedDifficulty: () => { },
            filteredTopics: [],
            stats: mockStats,
            isLoading: true,
        }} />
    ),
};