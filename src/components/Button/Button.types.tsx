export interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary" | "danger";
  backgroundColor?: string;
  disabled?: boolean;
  onClick?: () => void;
}
