import * as React from "react";
import { cn } from "../../lib/cn.js";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn("animate-pulse rounded-xl bg-gray-200", className)}
      {...props}
    />
  );
}