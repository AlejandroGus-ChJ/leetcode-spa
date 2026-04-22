import { render, screen } from '@testing-library/react';
import { Progress } from './Progress';
import { describe, it, expect } from 'vitest';

describe('Progress Component', () => {
  it('renders linear variant', () => {
    render(<Progress variant="linear" value={50} />);
    expect(screen.getByRole('progressbar')).toBeDefined();
  });
});