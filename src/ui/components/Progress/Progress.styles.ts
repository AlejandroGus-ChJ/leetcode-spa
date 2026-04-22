import { SxProps, Theme } from '@mui/material';

export const containerStyles: SxProps<Theme> = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  maxWidth: { xs: '320px', sm: '100%' },
};

export const labelStyles: SxProps<Theme> = {
  minWidth: (theme) => theme.spacing(4),
  ml: 1,
};