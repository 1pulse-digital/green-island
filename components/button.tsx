import cn from "classnames"

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  color?: "primary" | "secondary"
}

export const Button = (props: ButtonProps) => {
  let colorClassNames = "bg-primary text-white "
  if (props.color === "secondary") {
    colorClassNames = "bg-secondary text-primary"
  }
  const combinedClassName = cn(colorClassNames, "rounded-full py-2 hover:bg-secondary px-4 md:px-10 py-3 shadow", props.className)
  return (
    <button className={combinedClassName}>
      {props.children}
    </button>
  );
};

export default Button
