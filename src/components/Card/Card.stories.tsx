// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import React from 'react';
import { Card } from './Card'; // Import your actual Button component

// Default export: metadata for Storybook
const meta: Meta<typeof Card> = {
  title: 'Components/Card', // Storybook sidebar category
  component: Card,
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
type Story = StoryObj<typeof Card>;

// Default button
export const Primary: Story = {
  args: {
    label: 'Primary Card',
    variant: 'primary',
    disabled: false,
  },
};

// Secondary button
export const Secondary: Story = {
  args: {
    label: 'Secondary Card',
    variant: 'secondary',
    disabled: false,
  },
};

// Disabled button
export const Disabled: Story = {
  args: {
    label: 'Disabled Card',
    variant: 'primary',
    disabled: true,
  },
};
