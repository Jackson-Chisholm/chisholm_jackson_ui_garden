import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import "@testing-library/jest-dom";
import { Label } from "./Label";

test("Checks if the button is fully active", () => {
  render(<Label htmlFor="test" label="Test Label" />);
  expect(screen.getByText("Test Label")).toBeVisible();
});

test("Check if the button changes when disabled", () => {
  render(<Label htmlFor="null" label="Off Label" disabled/>);

  expect(screen.getByText("Off Label")).toHaveStyle("background-color: #cccccc");
  expect(screen.getByText("Off Label")).toHaveStyle("cursor: not-allowed");
});