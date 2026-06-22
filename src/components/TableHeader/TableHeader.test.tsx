import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import "@testing-library/jest-dom";
import { TableHeader } from "./TableHeader";

test("Checks if the Header is fully active", () => {
  render(<table>
      <tbody>
        <tr>
          <TableHeader content="Makoto Yuki" />
        </tr>
      </tbody>
    </table>);
  expect(screen.getByText("Makoto Yuki")).toBeVisible();
});

test("Check if the Header changes when disabled", () => {
  render(<table>
      <tbody>
        <tr>
          <TableHeader content="Adam Sandler" disabled/>
        </tr>
      </tbody>
    </table>);

  expect(screen.getByText("Adam Sandler")).toHaveStyle("background-color: #cccccc");
  expect(screen.getByText("Adam Sandler")).toHaveStyle("cursor: not-allowed");
});