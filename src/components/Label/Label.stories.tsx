// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import React from 'react';
import { Label } from './Label'; // Import your actual Button component

// Default export: metadata for Storybook
const meta: Meta<typeof Label> = {
  title: 'Components/Label', // Storybook sidebar category
  component: Label,
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
type Story = StoryObj<typeof Label>;

// Default button
export const Primary: Story = {
  args: {
    label: 'Primary Label',
    variant: 'primary',
    disabled: false,
  },
};

// Secondary button
export const Secondary: Story = {
  args: {
    label: 'Secondary Label',
    variant: 'secondary',
    disabled: false,
  },
};

// Disabled button
export const Disabled: Story = {
  args: {
    label: 'Disabled Label',
    variant: 'primary',
    disabled: true,
  },
};
