// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import React from 'react';
import { TableHeader } from './TableHeader'; // Import your actual Button component

// Default export: metadata for Storybook
const meta: Meta<typeof TableHeader> = {
  title: 'Components/TableHeader', // Storybook sidebar category
  component: TableHeader,
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
type Story = StoryObj<typeof TableHeader>;

// Default button
export const Primary: Story = {
  args: {
    content: 'Primary Table Cell',
    variant: 'primary',
    disabled: false,
  },
};

// Secondary button
export const Secondary: Story = {
  args: {
    content: 'Secondary Table Cell',
    variant: 'secondary',
    disabled: false,
  },
};

// Disabled button
export const Disabled: Story = {
  args: {
    content: 'Disabled Table Cell',
    variant: 'primary',
    disabled: true,
  },
};
