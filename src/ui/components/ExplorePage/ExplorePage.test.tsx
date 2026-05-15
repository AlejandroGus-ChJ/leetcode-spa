import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, test, expect, vi } from 'vitest';

import ExplorePage from './ExplorePage';

// Usamos "vi" en lugar de "jest" para que sea compatible con tu entorno
vi.mock('./ExplorePage.constants', () => {
  return {
    TOPIC_CARDS_DATA: [
      {
        id: '1',
        title: 'Arrays & Hashing',
        difficulty: 'Easy',
        solved: 15,
        total: 20,
      },
    ],
  };
});

describe('ExplorePage Component', () => {
  test('renders page title and subtitle', () => {
    render(<ExplorePage />);
    expect(screen.getByText(/Explore/i)).toBeInTheDocument();
    expect(screen.getByText(/Master coding interview questions/i)).toBeInTheDocument();
  });

  test('renders KPI statistics cards', () => {
    render(<ExplorePage />);
    expect(screen.getByText(/Topics Available/i)).toBeInTheDocument();
    expect(screen.getByText(/In Progress/i)).toBeInTheDocument();
  });

  test('renders topic cards', () => {
    render(<ExplorePage />);
    expect(screen.getByText(/Arrays & Hashing/i)).toBeInTheDocument();
  });

  test('renders filter buttons', () => {
    render(<ExplorePage />);
    expect(screen.getByText(/All Categories/i)).toBeInTheDocument();
    expect(screen.getByText(/All Difficulties/i)).toBeInTheDocument();
  });
});
