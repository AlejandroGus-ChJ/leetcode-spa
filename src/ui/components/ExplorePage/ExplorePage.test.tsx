import { ThemeProvider, createTheme } from '@mui/material';
import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';

import ExplorePage from './ExplorePage';

const theme = createTheme();

describe('ExplorePage', () => {
  test('renders the Explore title', () => {
    render(
      <ThemeProvider theme={theme}>
        <ExplorePage />
      </ThemeProvider>
    );
    expect(screen.getByText(/Explorar/i)).toBeInTheDocument();
  });
});
