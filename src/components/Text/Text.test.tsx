import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import "@testing-library/jest-dom";
import { Text } from "./Text";

test("Checks if the button is fully active", () => {
  render(<Text label="Test Text" />);
  expect(screen.getByText("Test Text")).toBeVisible();
});

test("Check if the button changes when disabled", () => {
  render(<Text label="Off Text" disabled />);

  expect(screen.getByText("Off Text")).toHaveStyle("background-color: #cccccc");
  expect(screen.getByText("Off Text")).toHaveStyle("cursor: not-allowed");
});
