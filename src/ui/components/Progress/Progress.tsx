import React from 'react';
import { Box, CircularProgress, LinearProgress, Typography } from '@mui/material';
import { ProgressProps } from './Progress.types';
import { PROGRESS_VARIANTS } from './Progress.constants';
import { containerStyles, labelStyles } from './Progress.styles';
import { formatProgressValue } from './Progress.utils';

export const Progress: React.FC<ProgressProps> = ({
  variant,
  value,
  showLabel = false,
  color = 'primary',
  size,
  ...props
}) => {
  const ariaAttr = { role: 'progressbar', 'aria-valuenow': value };

  if (variant === PROGRESS_VARIANTS.CIRCULAR) {
    return <CircularProgress {...ariaAttr} variant={value ? 'determinate' : 'indeterminate'} value={value} color={color} size={size} {...props} />;
  }

  return (
    <Box sx={containerStyles}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress {...ariaAttr} variant={value ? 'determinate' : 'indeterminate'} value={value} color={color} {...props} />
      </Box>
      {showLabel && value !== undefined && (
        <Box sx={labelStyles}>
          <Typography variant="body2" color="text.secondary">{formatProgressValue(value)}</Typography>
        </Box>
      )}
    </Box>
  );
};