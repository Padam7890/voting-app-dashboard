import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  className?: string;
  type?: "button" | "submit" | "reset"; 
}

const Button = ({
  label,
  className = "",
  type,
  ...props
}: ButtonProps) => {
  return (
    <button
     type={type}
      className={`cursor-pointer rounded-lg border border-primary bg-primary p-2 px-4 text-white transition hover:bg-opacity-90 ${className}`}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
