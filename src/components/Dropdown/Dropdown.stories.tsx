// Button.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import React from "react";
import { Dropdown } from "./Dropdown"; // Import your actual Button component

// Default export: metadata for Storybook
const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown", // Storybook sidebar category
  component: Dropdown,
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
type Story = StoryObj<typeof Dropdown>;

// Default button
export const Primary: Story = {
  args: {
    id: "Primary Text",
    optionA: "Primary A",
    optionB: "Primary B",
    variant: "primary",
    disabled: false,
  },
};

// Secondary button
export const Secondary: Story = {
  args: {
    id: "Secondary Text",
    optionA: "Second A",
    optionB: "Second B",
    variant: "secondary",
    disabled: false,
  },
};

// Disabled button
export const Disabled: Story = {
  args: {
    id: "Disabled Text",
    optionA: "Off A",
    optionB: "Off B",
    variant: "primary",
    disabled: true,
  },
};
