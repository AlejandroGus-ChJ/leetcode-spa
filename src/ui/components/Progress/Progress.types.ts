import type { SxProps, Theme } from '@mui/material';
import type { LinearProgressProps } from '@mui/material/LinearProgress';
import type { CircularProgressProps } from '@mui/material/CircularProgress';

export interface ProgressProps extends Partial<LinearProgressProps & CircularProgressProps> {
  variant: 'linear' | 'circular';
  showLabel?: boolean;
  size?: number | string;
}