// Button.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import React from "react";
import { Text } from "./Text"; // Import your actual Button component

// Default export: metadata for Storybook
const meta: Meta<typeof Text> = {
  title: "Components/Text", // Storybook sidebar category
  component: Text,
  tags: ["autodocs"], // Enables auto-generated docs
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "danger"],
    },
    disabled: { control: "boolean" },
  },
};

export default meta;

// Story type definition
type Story = StoryObj<typeof Text>;

// Default button
export const Primary: Story = {
  args: {
    label: "Primary Text",
    variant: "primary",
    disabled: false,
  },
};

// Secondary button
export const Secondary: Story = {
  args: {
    label: "Secondary Text",
    variant: "secondary",
    disabled: false,
  },
};

// Disabled button
export const Disabled: Story = {
  args: {
    label: "Disabled Text",
    variant: "primary",
    disabled: true,
  },
};
