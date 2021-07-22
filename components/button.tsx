export interface ButtonProps {
  children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  return (
    <button className={"text-secondary rounded-full py-2 hover:bg-primary"}>
      {props.children}
    </button>
  );
};

export default Button;
