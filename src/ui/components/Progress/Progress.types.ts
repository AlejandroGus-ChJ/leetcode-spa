// Añadimos la palabra 'type' aquí
import { ProgressVariant, ProgressMode } from './Progress.constants';

import type { LinearProgressProps, CircularProgressProps } from '@mui/material';

export interface ProgressProps
  extends Omit<LinearProgressProps & CircularProgressProps, 'variant'> {
  variant?: ProgressVariant;
  mode?: ProgressMode;
  showLabel?: boolean;
  customSize?: number;
}
