import * as React from "react";
import { cn } from "../../lib/cn.js";

export function Navbar({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn(
        "flex items-center justify-between border-b border-gray-200 bg-white px-4 py-3",
        className
      )}
      {...props}
    />
  );
}

export function NavbarBrand({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("font-semibold text-gray-900", className)} {...props} />;
}

export function NavbarNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("hidden items-center gap-6 md:flex", className)} {...props} />;
}

export function NavbarActions({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex items-center gap-3", className)} {...props} />;
}