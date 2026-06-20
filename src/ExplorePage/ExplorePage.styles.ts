import { Box, Card } from '@mui/material';
import { styled } from '@mui/material/styles';

export const PageContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4),
  maxWidth: '1200px',
  margin: '0 auto',
  width: '100%',
  boxSizing: 'border-box',
}));

export const KpiCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  height: '100%',
  minHeight: '90px',
  boxSizing: 'border-box',
  borderRadius: theme.shape.borderRadius,
}));

export const StyledTopicCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  minHeight: '280px',
  boxSizing: 'border-box',
  borderRadius: theme.shape.borderRadius,
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[4],
  },
}));

export const DescriptionContainer = styled(Box)({
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  minHeight: '40px',
});
