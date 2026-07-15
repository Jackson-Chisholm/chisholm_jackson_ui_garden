export interface CardProps {
  label: string;
  title?: string;
  variant?: "primary" | "secondary" | "danger";
  backgroundColor?: string;
  disabled?: boolean;
}
