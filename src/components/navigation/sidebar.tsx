import * as React from "react";
import { cn } from "../../lib/cn.js";

export function Sidebar({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <aside
      className={cn(
        "flex h-full w-72 flex-col border-r border-gray-200 bg-white",
        className
      )}
      {...props}
    />
  );
}

export function SidebarHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("border-b border-gray-200 p-4", className)} {...props} />;
}

export function SidebarContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex-1 p-4", className)} {...props} />;
}

export function SidebarFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("border-t border-gray-200 p-4", className)} {...props} />;
}

export function SidebarGroup({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mb-6 space-y-2", className)} {...props} />;
}

export function SidebarGroupLabel({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-xs font-medium uppercase tracking-wide text-gray-500", className)} {...props} />;
}

export function SidebarItem({
  className,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={cn(
        "flex items-center rounded-xl px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900",
        className
      )}
      {...props}
    />
  );
}