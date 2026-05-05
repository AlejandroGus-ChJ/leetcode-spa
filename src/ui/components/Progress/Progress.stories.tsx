import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from './Progress';
import { ProgressVariant, ProgressMode } from './Progress.constants';

const meta: Meta<typeof Progress> = {
  title: 'Components/Progress',
  component: Progress,
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    variant: ProgressVariant.LINEAR,
    mode: ProgressMode.INDETERMINATE,
  },
};

export const Circular: Story = {
  args: {
    variant: ProgressVariant.CIRCULAR,
    mode: ProgressMode.DETERMINATE,
    value: 75,
  },
};