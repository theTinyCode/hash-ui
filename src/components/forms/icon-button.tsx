import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn.js";

const iconButtonVariants = cva(
  "inline-flex items-center justify-center rounded-xl transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
        outline: "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50",
        ghost: "text-gray-900 hover:bg-gray-100",
      },
      size: {
        sm: "h-8 w-8",
        md: "h-10 w-10",
        lg: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "ghost",
      size: "md",
    },
  }
);

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {}

export function IconButton({
  className,
  variant,
  size,
  ...props
}: IconButtonProps) {
  return (
    <button
      className={cn(iconButtonVariants({ variant, size }), className)}
      {...props}
    />
  );
}