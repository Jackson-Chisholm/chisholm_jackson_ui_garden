import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import "@testing-library/jest-dom";
import { Button } from "./Button";

test("Checks if the button is fully active", () => {
  render(<Button label="Test Button" />);
  expect(screen.getByText("Test Button")).toBeVisible();
});

test("Check if the button changes when disabled", () => {
  render(<Button label="Off Button" disabled />);

  expect(screen.getByText("Off Button")).toHaveStyle(
    "background-color: #cccccc",
  );
  expect(screen.getByText("Off Button")).toHaveStyle("cursor: not-allowed");
});
