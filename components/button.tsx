import cn from "classnames";

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  color: "primary" | "secondary";
}

export const Button = (props: ButtonProps) => {
  const combinedClassName = cn(
    props.className,
    { "bg-primary text-white": props.color === "primary" },
    { "bg-secondary text-white": props.color === "secondary" },
    "rounded-full py-2 hover:bg-secondary px-4 md:px-10 py-3 shadow hover:shadow-sm"
  );
  return <button className={combinedClassName}>{props.children}</button>;
};

export default Button;
