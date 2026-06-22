import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import "@testing-library/jest-dom";
import { TableFooter } from "./TableFooter";

test("Checks if the button is fully active", () => {
  render(<table>
      <tfoot>
        <tr>
          <TableFooter content="Makoto Yuki" />
        </tr>
      </tfoot>
    </table>);
  expect(screen.getByText("Makoto Yuki")).toBeVisible();
});

test("Check if the button changes when disabled", () => {
  render(<table>
      <tfoot>
        <tr>
          <TableFooter content="Adam Sandler" disabled/>
        </tr>
      </tfoot>
    </table>);

  expect(screen.getByText("Adam Sandler")).toHaveStyle("background-color: #cccccc");
  expect(screen.getByText("Adam Sandler")).toHaveStyle("cursor: not-allowed");
});