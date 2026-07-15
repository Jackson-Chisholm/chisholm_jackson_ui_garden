// Button.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import React from "react";
import { Table } from "./Table"; // Import your actual Button component

// Default export: metadata for Storybook
const meta: Meta<typeof Table> = {
  title: "Components/Table", // Storybook sidebar category
  component: Table,
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
type Story = StoryObj<typeof Table>;

// Default button
export const Primary: Story = {
  args: {
    title: "Primary Table",
    variant: "primary",
    disabled: false,
  },
};

// Secondary button
export const Secondary: Story = {
  args: {
    title: "Secondary Table",
    variant: "secondary",
    disabled: false,
  },
};

// Disabled button
export const Disabled: Story = {
  args: {
    title: "Disabled Table",
    variant: "primary",
    disabled: true,
  },
};
