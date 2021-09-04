import tailshake from "tailshake";
import { ReactNode, MouseEvent } from "react";
import cn from "classnames";

export interface ButtonProps {
  children: ReactNode;
  className?: string;
  color: "primary" | "secondary";
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Button = (props: ButtonProps) => {
  const baseClassname = "rounded-full py-2 px-4 md:px-10 py-3 shadow hover:shadow-sm text-lg disabled:opacity-60 whitespace-nowrap";

  const isPrimary = props.color === "primary";
  const isSecondary = props.color === "secondary";
  const isDisabled = props.disabled;

  const colorClassname = cn(
    { "bg-primary text-white": isPrimary },
    { "hover:bg-secondary": (isPrimary && !isDisabled) },

    { "bg-gray-50 border-secondary border-2 text-secondary ": isSecondary },
    { "hover:bg-secondary hover:text-white": isSecondary && !isDisabled },
  );


  const mergedClassname = tailshake(baseClassname, colorClassname, props.className);
  return (
    <button
      className={mergedClassname}
      disabled={props.disabled}
      onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
