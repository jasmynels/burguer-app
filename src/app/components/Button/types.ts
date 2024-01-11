export interface Buttons {
  size: "default" | "medium";
  disabled: boolean;
  color: "green" | "gray";
  text: string;
  onClick?: () => void;
}
