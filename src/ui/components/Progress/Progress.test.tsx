import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, test, expect } from 'vitest'; // Añadimos este import para reconocer describe/test

import { Progress } from './Progress';
import { ProgressVariant, ProgressMode } from './Progress.constants';

describe('Progress Component', () => {
  test('renders progress bar with correct ARIA role', () => {
    render(<Progress />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  test('displays correct percentage label', () => {
    render(
      <Progress
        variant={ProgressVariant.LINEAR}
        mode={ProgressMode.DETERMINATE}
        value={50}
        showLabel
      />
    );
    expect(screen.getByText('50%')).toBeInTheDocument();
  });
});
