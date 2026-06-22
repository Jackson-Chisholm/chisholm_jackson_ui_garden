// Button.tsx
import React from 'react';
import { ImgProps } from "./Img.types";
import styled from "styled-components";

interface StyledImgProps {
  $backgroundColor?: string;
  $disabled?: boolean;
}

const StyledImg = styled.img<StyledImgProps>`
  padding: 12px 20px;
  border: none;
  border-radius: 8px;

  background-color: ${(props) =>
    props.$disabled ? "#cccccc" : props.$backgroundColor || "#2563eb"};

  color: white;
  font-size: 1rem;

  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.$disabled ? 0.7 : 1)};

  width: fit-content;
  max-width: 100%;

  &:hover {
    opacity: ${(props) => (props.$disabled ? 0.7 : 0.9)};
  }
`;


export function Img ({
  src,
  alt,
  variant = 'primary',
  backgroundColor = "#2563eb",
  disabled = false,
}: ImgProps) {
  return (
    <StyledImg
      src={src}
      alt={alt}
      className={`btn btn-${variant}`}
      $disabled={disabled}
      $backgroundColor={backgroundColor}
    >
    </StyledImg>
  );
}
