import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import "@testing-library/jest-dom";
import { Card } from "./Card";

test("Checks if the button is fully active", () => {
  render(<Card label="Test Card" />);
  expect(screen.getByText("Test Card")).toBeVisible();
});

test("Check if the button changes when disabled", () => {
  render(<Card label="Off Card" disabled />);

  expect(screen.getByText("Off Card")).toHaveStyle("background-color: #cccccc");
  expect(screen.getByText("Off Card")).toHaveStyle("cursor: not-allowed");
});
