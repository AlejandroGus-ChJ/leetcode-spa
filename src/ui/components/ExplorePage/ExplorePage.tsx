// Core icons for KPI statistics
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import {
  Typography,
  Box,
  Card,
  CardContent,
  LinearProgress,
  Chip,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Grid,
} from '@mui/material';
import React, { type ElementType } from 'react';

import { TOPIC_CARDS_DATA } from './ExplorePage.constants';
import { PageContainer, StatsCard, GridContainer } from './ExplorePage.styles';
import { getDifficultyColor, calculateProgress } from './ExplorePage.utils';

const ExplorePage: React.FC = () => {
  return (
    <PageContainer>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Explore
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Master coding interview questions by topic
      </Typography>

      {/* KPI Stats Summary */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4} component={Box as ElementType}>
          <StatsCard
            elevation={0}
            variant="outlined"
            sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 2 }}
          >
            <MenuBookOutlinedIcon color="primary" />
            <Box>
              <Typography variant="h6" fontWeight="bold">
                15
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Topics Available
              </Typography>
            </Box>
          </StatsCard>
        </Grid>

        <Grid item xs={12} md={4} component={Box as ElementType}>
          <StatsCard
            elevation={0}
            variant="outlined"
            sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 2 }}
          >
            <EmojiEventsOutlinedIcon color="warning" />
            <Box>
              <Typography variant="h6" fontWeight="bold">
                8
              </Typography>
              <Typography variant="body2" color="text.secondary">
                In Progress
              </Typography>
            </Box>
          </StatsCard>
        </Grid>

        <Grid item xs={12} md={4} component={Box as ElementType}>
          <StatsCard
            elevation={0}
            variant="outlined"
            sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 2 }}
          >
            <TrendingUpIcon color="success" />
            <Box>
              <Typography variant="h6" fontWeight="bold">
                45%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Overall Progress
              </Typography>
            </Box>
          </StatsCard>
        </Grid>
      </Grid>

      {/* Category and Difficulty filters */}
      <Box sx={{ mb: 4, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <ToggleButtonGroup exclusive value="all" color="primary" size="small">
          <ToggleButton value="all">All Categories</ToggleButton>
        </ToggleButtonGroup>

        <ToggleButtonGroup exclusive value="all" color="primary" size="small">
          <ToggleButton value="all">All Difficulties</ToggleButton>
        </ToggleButtonGroup>
      </Box>

      {/* Responsive Topic Grid Container */}
      <GridContainer>
        {TOPIC_CARDS_DATA.map((topic) => (
          <Card
            key={topic.id}
            sx={{
              borderRadius: 4,
              border: '1px solid #e0e0e0',
              transition: '0.3s',
              '&:hover': {
                boxShadow: 6,
                transform: 'translateY(-4px)',
              },
            }}
          >
            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  mb: 2,
                }}
              >
                <Typography variant="h6" fontWeight="bold">
                  {topic.title}
                </Typography>
                <Chip
                  label={topic.difficulty}
                  color={
                    getDifficultyColor(topic.difficulty) as
                      | 'success'
                      | 'warning'
                      | 'error'
                      | 'default'
                  }
                  size="small"
                />
              </Box>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  mb: 1,
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                Problems: {topic.solved}/{topic.total}
              </Typography>

              <LinearProgress
                variant="determinate"
                value={calculateProgress(topic.solved, topic.total)}
                sx={{ height: 8, borderRadius: 5, mb: 3 }}
              />

              <Button variant="contained" fullWidth sx={{ borderRadius: 2, textTransform: 'none' }}>
                {topic.solved > 0 ? 'Continue Learning' : 'Start Learning'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </GridContainer>
    </PageContainer>
  );
};

export default ExplorePage;
