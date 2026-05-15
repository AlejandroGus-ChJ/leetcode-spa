import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ExplorePage from './ExplorePage';
import { ThemeProvider, createTheme } from '@mui/material';

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