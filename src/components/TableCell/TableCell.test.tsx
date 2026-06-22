import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import "@testing-library/jest-dom";
import { TableCell } from "./TableCell";

test("Checks if the button is fully active", () => {
  render(<table>
      <tbody>
        <tr>
          <TableCell content="Makoto Yuki" />
        </tr>
      </tbody>
    </table>);
  expect(screen.getByText("Makoto Yuki")).toBeVisible();
});

test("Check if the button changes when disabled", () => {
  render(<table>
      <tbody>
        <tr>
          <TableCell content="Adam Sandler" disabled/>
        </tr>
      </tbody>
    </table>);

  expect(screen.getByText("Adam Sandler")).toHaveStyle("background-color: #cccccc");
  expect(screen.getByText("Adam Sandler")).toHaveStyle("cursor: not-allowed");
});