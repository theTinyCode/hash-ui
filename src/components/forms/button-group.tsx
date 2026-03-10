import * as React from "react";
import { cn } from "../../lib/cn.js";

export interface ButtonGroupProps
  extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
}

export function ButtonGroup({
  className,
  orientation = "horizontal",
  ...props
}: ButtonGroupProps) {
  return (
    <div
      className={cn(
        "inline-flex",
        orientation === "horizontal" ? "flex-row items-center" : "flex-col",
        className
      )}
      role="group"
      {...props}
    />
  );
}