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

export const SmallButton = (props: ButtonProps) => {

  const baseClassname = "hidden lg:block whitespace-nowrap  items-center px-8 justify-center  py-2 border border-transparent rounded-full shadow-sm text-base font-medium ";

  const isPrimary = props.color === "primary";
  const isSecondary = props.color === "secondary";
  const isDisabled = props.disabled;

  // text-white bg-primary  hover:bg-secondary
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

export const SquareButton = (props: ButtonProps) => {
// const baseClassname = "rounded-full px-4 md:px-10 py-3 shadow hover:shadow-sm text-lg disabled:opacity-60 whitespace-nowrap";
   const baseClassname = "rounded-lg   px-4 md:px-10 py-3 shadow hover:shadow-sm w-full text-base font-semibold disabled:opacity-60 text-center text-white whitespace-nowrap transition duration-200 ease-in focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200 focus:outline-none bg-primary hover:bg-secondary";

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
      type="submit"
      className={mergedClassname}>
      {props.children}
    </button>
  );
};

export default Button;
