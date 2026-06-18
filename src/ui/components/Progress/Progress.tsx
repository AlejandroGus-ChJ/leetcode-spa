import { LinearProgress, CircularProgress, Typography, Box } from '@mui/material';
import React from 'react';

import { ProgressVariant, ProgressMode } from './Progress.constants';
import { useProgress } from './Progress.hook';
import { containerStyles, labelStyles } from './Progress.styles';

import type { ProgressProps } from './Progress.types'; // Añadimos 'type'

export const Progress: React.FC<ProgressProps> = ({
  variant = ProgressVariant.LINEAR,
  mode = ProgressMode.INDETERMINATE,
  value,
  showLabel = false,
  color = 'primary',
  customSize,
  ...props
}) => {
  const { normalizedValue } = useProgress(value);
  const isLinear = variant === ProgressVariant.LINEAR;
  const isDeterminate = mode === ProgressMode.DETERMINATE;

  return (
    <Box sx={containerStyles} aria-valuenow={isDeterminate ? normalizedValue : undefined}>
      {isLinear ? (
        <Box sx={{ width: '100%' }}>
          <LinearProgress
            variant={mode as 'determinate' | 'indeterminate'}
            value={normalizedValue}
            color={color}
            {...props}
          />
        </Box>
      ) : (
        <CircularProgress
          variant={mode as 'determinate' | 'indeterminate'}
          value={normalizedValue}
          size={customSize}
          color={color}
          {...props}
        />
      )}

      {isLinear && isDeterminate && showLabel && (
        <Typography variant="body2" color="text.secondary" sx={labelStyles}>
          {`${Math.round(normalizedValue)}%`}
        </Typography>
      )}
    </Box>
  );
};
