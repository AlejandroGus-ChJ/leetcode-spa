import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from './Progress';

const meta: Meta<typeof Progress> = {
  title: 'UI/Progress',
  component: Progress,
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Linear: Story = { args: { variant: 'linear', value: 70, showLabel: true } };
export const Circular: Story = { args: { variant: 'circular', value: 45 } };