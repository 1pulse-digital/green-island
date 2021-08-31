import cn from "classnames";
import { ReactNode, MouseEvent } from "react";

export interface ButtonProps {
  children: ReactNode;
  className?: string;
  color: "primary" | "secondary";
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}

export const Button = (props: ButtonProps) => {
  const combinedClassName = cn(
    props.className,
    { "bg-primary text-white hover:bg-secondary": props.color === "primary" },
    { "bg-gray-50 border-secondary border-2 text-secondary hover:bg-secondary hover:text-white": props.color === "secondary" },
    "rounded-full py-2 px-4 md:px-10 py-3 shadow hover:shadow-sm text-lg",
    "whitespace-nowrap",
  );
  return (
    <button
      className={combinedClassName}
      disabled={props.disabled}
      onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
