import type { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  children: React.ReactNode;
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button {...props} className="bg-gray-500 rounded p-2 text-white">
      {children}
    </button>
  );
}
