import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import "@testing-library/jest-dom";
import { Img } from "./Img";

test("Checks if the button is fully active", () => {
  render(<Img src="test.png" alt="uno" />);
  expect(screen.getByAltText("uno")).toBeVisible();
});

test("Check if the button changes when disabled", () => {
  render(<Img src="off.png" alt="dos" disabled />);

  expect(screen.getByAltText("dos")).toHaveStyle("background-color: #cccccc");
  expect(screen.getByAltText("dos")).toHaveStyle("cursor: not-allowed");
});
