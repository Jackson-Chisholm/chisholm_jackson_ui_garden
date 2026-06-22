// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import React from 'react';
import { Button } from './Button'; // Import your actual Button component

// Default export: metadata for Storybook
const meta: Meta<typeof Button> = {
  title: 'Components/Button', // Storybook sidebar category
  component: Button,
  tags: ['autodocs'], // Enables auto-generated docs
  argTypes: {
    onClick: { action: 'clicked' }, // Logs click events in Storybook actions panel
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'danger'],
    },
    disabled: { control: 'boolean' },
  },
};

export default meta;

// Story type definition
type Story = StoryObj<typeof Button>;

// Default button
export const Primary: Story = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
    disabled: false,
  },
};

// Secondary button
export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
    disabled: false,
  },
};

// Disabled button
export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    variant: 'primary',
    disabled: true,
  },
};
