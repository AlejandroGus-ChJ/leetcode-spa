// Añadimos la palabra 'type' aquí
import type { LinearProgressProps, CircularProgressProps } from '@mui/material';
import { ProgressVariant, ProgressMode } from './Progress.constants';

export interface ProgressProps extends Omit<LinearProgressProps & CircularProgressProps, 'variant'> {
  variant?: ProgressVariant;
  mode?: ProgressMode;
  showLabel?: boolean;
  customSize?: number;
}