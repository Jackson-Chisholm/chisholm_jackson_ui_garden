// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import React from 'react';
import { Radio } from './Radio'; // Import your actual Button component

// Default export: metadata for Storybook
const meta: Meta<typeof Radio> = {
  title: 'Components/Radio', // Storybook sidebar category
  component: Radio,
  tags: ['autodocs'], // Enables auto-generated docs
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'danger'],
    },
    disabled: { control: 'boolean' },
  },
};

export default meta;

// Story type definition
type Story = StoryObj<typeof Radio>;

// Default button
export const Primary: Story = {
  args: {
    label: 'Primary Radio',
    variant: 'primary',
    disabled: false,
  },
};

// Secondary button
export const Secondary: Story = {
  args: {
    label: 'Secondary Radio',
    variant: 'secondary',
    disabled: false,
  },
};

// Disabled button
export const Disabled: Story = {
  args: {
    label: 'Disabled Radio',
    variant: 'primary',
    disabled: true,
  },
};
