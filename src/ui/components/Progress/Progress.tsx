import React from 'react';
import { LinearProgress, CircularProgress, Typography, Box } from '@mui/material';
import type { ProgressProps } from './Progress.types'; // Añadimos 'type'
import { ProgressVariant, ProgressMode } from './Progress.constants';
import { containerStyles, labelStyles } from './Progress.styles';
import { useProgress } from './Progress.hook';

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
    <Box 
      sx={containerStyles}  
      aria-valuenow={isDeterminate ? normalizedValue : undefined}
    >
      {isLinear ? (
        <Box sx={{ width: '100%' }}>
          <LinearProgress 
            variant={mode as any} // 'as any' evita conflictos de tipos de MUI
            value={normalizedValue} 
            color={color}
            {...props} 
          />
        </Box>
      ) : (
        <CircularProgress 
          variant={mode as any} 
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