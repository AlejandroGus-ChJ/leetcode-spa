import * as MuiIcons from '@mui/icons-material';
import {
  Typography,
  Grid,
  Box,
  ToggleButtonGroup,
  ToggleButton,
  Chip,
  LinearProgress,
  Button,
  Stack,
  Skeleton,
} from '@mui/material';
import React from 'react';

import { CATEGORIES, DIFFICULTIES } from './ExplorePage.constants';
import { useExplorePage } from './ExplorePage.hook';
import * as S from './ExplorePage.styles';
import { getDifficultyColor, getProgressPercent } from './ExplorePage.utils';

import type { ExploreTopic, ExplorePageHook } from './ExplorePage.types';

export const ExplorePage: React.FC<{ mockDataForStorybook?: ExplorePageHook }> = ({
  mockDataForStorybook,
}) => {
  const hookData = useExplorePage();

  // Si viene la data de Storybook la usa, si no, jala la del hook real
  const {
    selectedCategory,
    setSelectedCategory,
    selectedDifficulty,
    setSelectedDifficulty,
    filteredTopics,
    stats,
    isLoading = false,
  } = mockDataForStorybook || hookData;

  const renderIcon = (iconName: string) => {
    const IconComponent = MuiIcons[iconName as keyof typeof MuiIcons];
    return IconComponent ? (
      <IconComponent sx={{ fontSize: 40, color: 'primary.main' }} />
    ) : (
      <MuiIcons.HelpOutline sx={{ fontSize: 40 }} />
    );
  };

  // Estado de carga con Skeletons
  if (isLoading) {
    return (
      <S.PageContainer>
        <Box>
          <Skeleton variant="text" width="30%" height={60} />
          <Skeleton variant="text" width="50%" />
        </Box>
        <Grid container spacing={3}>
          {[1, 2, 3].map((n) => (
            <Grid size={{ xs: 12, md: 4 }} key={n}>
              <Skeleton variant="rounded" height={90} />
            </Grid>
          ))}
        </Grid>
        <Box>
          <Skeleton variant="rounded" height={40} width="100%" />
        </Box>
        <Grid container spacing={3}>
          {[1, 2, 3].map((n) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={n}>
              <Skeleton variant="rounded" height={280} />
            </Grid>
          ))}
        </Grid>
      </S.PageContainer>
    );
  }

  return (
    <S.PageContainer>
      {/* Encabezado */}
      <Box>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Explorar
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Domina las preguntas de entrevistas de codificación por tema
        </Typography>
      </Box>

      {/* Tarjetas de estadísticas */}
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 4 }}>
          <S.KpiCard variant="outlined">
            <MuiIcons.MenuBookOutlined color="primary" sx={{ fontSize: 32 }} />
            <Box>
              <Typography variant="h5" fontWeight="bold">
                {stats.topicsAvailable}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Topics Available
              </Typography>
            </Box>
          </S.KpiCard>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <S.KpiCard variant="outlined">
            <MuiIcons.EmojiEventsOutlined color="success" sx={{ fontSize: 32 }} />
            <Box>
              <Typography variant="h5" fontWeight="bold">
                {stats.problemsSolved}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Problems Solved
              </Typography>
            </Box>
          </S.KpiCard>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <S.KpiCard variant="outlined">
            <Box sx={{ width: '100%' }}>
              <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 1 }}>
                <MuiIcons.TrendingUpOutlined color="warning" sx={{ fontSize: 32 }} />
                <Box>
                  <Typography variant="h5" fontWeight="bold">
                    {stats.overallProgress}%
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Overall Progress
                  </Typography>
                </Box>
              </Stack>
              <LinearProgress
                variant="determinate"
                value={stats.overallProgress}
                color="primary"
                sx={{ borderRadius: 2, height: 6 }}
              />
            </Box>
          </S.KpiCard>
        </Grid>
      </Grid>

      {/* Filtros */}
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={2}
        justifyContent="space-between"
        alignItems={{ xs: 'flex-start', md: 'center' }}
      >
        <Box>
          <Typography variant="subtitle2" gutterBottom fontWeight="bold">
            Categoría
          </Typography>
          <ToggleButtonGroup
            value={selectedCategory}
            exclusive
            onChange={(_, value) => value && setSelectedCategory(value)}
            size="small"
            color="primary"
          >
            {CATEGORIES.map((cat) => (
              <ToggleButton key={cat} value={cat}>
                {cat}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box>

        <Box>
          <Typography variant="subtitle2" gutterBottom fontWeight="bold">
            Dificultad
          </Typography>
          <ToggleButtonGroup
            value={selectedDifficulty}
            exclusive
            onChange={(_, value) => value && setSelectedDifficulty(value)}
            size="small"
            color="primary"
          >
            {DIFFICULTIES.map((diff) => (
              <ToggleButton key={diff} value={diff}>
                {diff.charAt(0).toUpperCase() + diff.slice(1)}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box>
      </Stack>

      {/* Grilla de temas */}
      {filteredTopics.length === 0 ? (
        <Box sx={{ py: 8, textAlign: 'center' }}>
          <Typography variant="h6" color="text.secondary">
            No topics match current filters
          </Typography>
        </Box>
      ) : (
        <Grid container spacing={3}>
          {filteredTopics.map((topic: ExploreTopic) => {
            const progressVal = getProgressPercent(topic.problemsSolved, topic.totalProblems);

            return (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={topic.id}>
                <S.StyledTopicCard variant="outlined">
                  <Box>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="flex-start"
                      sx={{ mb: 2 }}
                    >
                      {renderIcon(topic.icon)}
                      <Chip
                        label={topic.difficulty.toUpperCase()}
                        size="small"
                        color={getDifficultyColor(topic.difficulty)}
                      />
                    </Stack>

                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {topic.title}
                    </Typography>

                    <S.DescriptionContainer sx={{ mb: 3 }}>
                      <Typography variant="body2" color="text.secondary">
                        {topic.description}
                      </Typography>
                    </S.DescriptionContainer>
                  </Box>

                  <Box>
                    <Box sx={{ mb: 2 }}>
                      <Stack direction="row" justifyContent="space-between" sx={{ mb: 0.5 }}>
                        <Typography variant="caption" color="text.secondary">
                          Progress
                        </Typography>
                        <Typography variant="caption" fontWeight="bold">
                          {topic.problemsSolved}/{topic.totalProblems}
                        </Typography>
                      </Stack>
                      <LinearProgress
                        variant="determinate"
                        value={progressVal}
                        sx={{ height: 6, borderRadius: 3 }}
                      />
                    </Box>

                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Chip label={topic.category} size="small" variant="outlined" />
                      <Button variant="contained" size="small" disableElevation>
                        {topic.problemsSolved > 0 ? 'Continuar aprendiendo' : 'Comenzar a aprender'}
                      </Button>
                    </Stack>
                  </Box>
                </S.StyledTopicCard>
              </Grid>
            );
          })}
        </Grid>
      )}
    </S.PageContainer>
  );
};
