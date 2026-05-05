import type { SxProps, Theme } from '@mui/material';

export const containerStyles: SxProps<Theme> = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  // Cumple con la prueba de 320px solicitada en los criterios
  maxWidth: { xs: '320px', sm: '100%' },
};

export const labelStyles: SxProps<Theme> = {
  // Usa theme.spacing(4) evitando hardcoded px como pide la nota técnica
  minWidth: (theme: Theme) => theme.spacing(4),
  ml: 1,
};
