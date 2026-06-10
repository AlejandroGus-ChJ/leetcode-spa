import ExplorePage from './ExplorePage';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ExplorePage> = {
  title: 'Pages/ExplorePage',
  component: ExplorePage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof ExplorePage>;

export const Default: Story = {};
