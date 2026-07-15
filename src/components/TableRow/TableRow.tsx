// Button.tsx
import React from "react";
import { TableRowProps } from "./TableRow.types";
import styled from "styled-components";

interface StyledTableRowProps {
  $backgroundColor?: string;
  $disabled?: boolean;
}

const StyledTableRow = styled.tr<StyledTableRowProps>`
  padding: 12px 20px;
  border: none;
  border-radius: 8px;

  background-color: ${(props) =>
    props.$disabled ? "#cccccc" : props.$backgroundColor || "#2563eb"};

  color: black;
  font-size: 1rem;

  cursor: ${(props) => (props.$disabled ? "not-allowed" : "default")};
  opacity: ${(props) => (props.$disabled ? 0.7 : 1)};

  width: fit-content;
  max-width: 100%;

  &:hover {
    opacity: ${(props) => (props.$disabled ? 0.7 : 0.9)};
  }
`;

export function TableRow({
  content,
  variant = "primary",
  backgroundColor = "#2563eb",
  disabled = false,
}: TableRowProps) {
  return (
    <StyledTableRow
      className={`btn btn-${variant}`}
      $disabled={disabled}
      $backgroundColor={backgroundColor}
    >
      {content}
    </StyledTableRow>
  );
}
