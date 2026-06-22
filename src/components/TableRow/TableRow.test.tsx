import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import "@testing-library/jest-dom";
import { TableRow } from "./TableRow";

test("Checks if the button is fully active", () => {
  render(<table>
      <tbody>
          <TableRow content="Makoto Yuki" />
      </tbody>
    </table>);
  expect(screen.getByText("Makoto Yuki")).toBeVisible();
});

test("Check if the button changes when disabled", () => {
  render(<table>
      <tbody>
          <TableRow content="Adam Sandler" disabled/>
      </tbody>
    </table>);

  expect(screen.getByText("Adam Sandler")).toHaveStyle("background-color: #cccccc");
  expect(screen.getByText("Adam Sandler")).toHaveStyle("cursor: not-allowed");
});