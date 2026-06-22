// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import React from 'react';
import { HeroImg } from './HeroImg'; // Import your actual Button component

// Default export: metadata for Storybook
const meta: Meta<typeof HeroImg> = {
  title: 'Components/HeroImg', // Storybook sidebar category
  component: HeroImg,
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
type Story = StoryObj<typeof HeroImg>;

// Default button
export const Primary: Story = {
  args: {
    src: 'fake.png',
    alt: 'still.png',
    variant: 'primary',
    disabled: false,
  },
};

// Secondary button
export const Secondary: Story = {
  args: {
    src: 'second.png',
    alt: 'still.png',
    variant: 'secondary',
    disabled: false,
  },
};

// Disabled button
export const Disabled: Story = {
  args: {
    src: 'disabled.png',
    alt: 'still.png',
    variant: 'primary',
    disabled: true,
  },
};
