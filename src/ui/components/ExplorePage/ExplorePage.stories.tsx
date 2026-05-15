import type { Meta, StoryObj } from '@storybook/react';
import ExplorePage from './ExplorePage';

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