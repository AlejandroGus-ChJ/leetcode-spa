import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import { describe, test, expect, vi, beforeEach } from 'vitest';

import { ExplorePage } from './ExplorePage';
import { useExplorePage } from './ExplorePage.hook';

import type { ExploreTopic } from './ExplorePage.types';

// Mock del hook para controlar los estados en las pruebas
vi.mock('./ExplorePage.hook', () => ({
  useExplorePage: vi.fn(),
}));

const mockStats = {
  topicsAvailable: 8,
  problemsSolved: 12,
  overallProgress: 25,
};

const mockTopics: ExploreTopic[] = [
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

describe('ExplorePage Component', () => {
  const mockSetSelectedCategory = vi.fn();
  const mockSetSelectedDifficulty = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    // Datos por defecto para los tests
    vi.mocked(useExplorePage).mockReturnValue({
      selectedCategory: 'All',
      setSelectedCategory: mockSetSelectedCategory,
      selectedDifficulty: 'All',
      setSelectedDifficulty: mockSetSelectedDifficulty,
      filteredTopics: mockTopics,
      isLoading: false,
      stats: mockStats,
    });
  });

  // Test 1: Comprobar que renderiza el header y las tarjetas principales
  test('renders the page title, subtitle and stats cards correctly', () => {
    render(<ExplorePage />);

    expect(screen.getByText(/Explorar/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Domina las preguntas de entrevistas de codificación por tema/i)
    ).toBeInTheDocument();

    // Verificar números de las tarjetas
    expect(screen.getByText('8')).toBeInTheDocument();
    expect(screen.getByText('12')).toBeInTheDocument();
    expect(screen.getByText('25%')).toBeInTheDocument();
  });

  // Test 2: Verificar que se muestran los temas y las fracciones de progreso
  test('renders the mock topics and correct progress information', () => {
    render(<ExplorePage />);

    expect(screen.getByText('Arrays & Hashing')).toBeInTheDocument();
    expect(screen.getByText('Advanced SQL Querying')).toBeInTheDocument();

    expect(screen.getByText('4/15')).toBeInTheDocument();
    expect(screen.getByText('0/5')).toBeInTheDocument();
  });

  // Test 3: Probar el click en los botones de categoría
  test('triggers setSelectedCategory when a category button is clicked', () => {
    render(<ExplorePage />);

    const categoryButton = screen.getByRole('button', { name: 'Data Structures' });
    fireEvent.click(categoryButton);

    expect(mockSetSelectedCategory).toHaveBeenCalled();
  });

  // Test 4: Probar el click en los botones de dificultad
  test('triggers setSelectedDifficulty when a difficulty button is clicked', () => {
    render(<ExplorePage />);

    const difficultyButton = screen.getByRole('button', { name: /Beginner/i });
    fireEvent.click(difficultyButton);

    expect(mockSetSelectedDifficulty).toHaveBeenCalled();
  });

  // Test 5: Validar el mensaje cuando no hay resultados en el filtro
  test('renders empty state message when no topics match current filters', () => {
    // Forzar retorno vacío para este caso
    vi.mocked(useExplorePage).mockReturnValue({
      selectedCategory: 'Database',
      setSelectedCategory: mockSetSelectedCategory,
      selectedDifficulty: 'beginner',
      setSelectedDifficulty: mockSetSelectedDifficulty,
      filteredTopics: [],
      isLoading: false,
      stats: mockStats,
    });

    render(<ExplorePage />);

    expect(screen.getByText(/No topics match current filters/i)).toBeInTheDocument();
  });
});
