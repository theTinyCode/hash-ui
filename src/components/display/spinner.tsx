import * as React from "react";
import { cn } from "../../lib/cn";

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
}

export function Spinner({
  className,
  size = "md",
  ...props
}: SpinnerProps) {
  const sizes = {
    sm: "h-4 w-4 border-2",
    md: "h-6 w-6 border-2",
    lg: "h-8 w-8 border-[3px]",
  };

  return (
    <div
      className={cn(
        "inline-block animate-spin rounded-full border-gray-300 border-t-gray-900",
        sizes[size],
        className
      )}
      aria-label="Loading"
      role="status"
      {...props}
    />
  );
}