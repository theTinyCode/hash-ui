import * as React from "react";
import { cn } from "../../lib/cn.js";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  fallback?: string;
}

export function Avatar({
  className,
  src,
  alt,
  fallback,
  ...props
}: AvatarProps) {
  return (
    <div
      className={cn(
        "relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gray-100 text-sm font-medium text-gray-700",
        className
      )}
      {...props}
    >
      {src ? (
        <img
          src={src}
          alt={alt ?? "Avatar"}
          className="h-full w-full object-cover"
        />
      ) : (
        <AvatarFallback>{fallback ?? "UI"}</AvatarFallback>
      )}
    </div>
  );
}

export function AvatarFallback({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn("uppercase", className)} {...props} />;
}

export function AvatarGroup({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex -space-x-3", className)} {...props} />;
}