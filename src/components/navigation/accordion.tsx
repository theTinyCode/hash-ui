import * as React from "react";
import { cn } from "../../lib/cn.js";

export function Accordion({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("w-full space-y-2", className)} {...props} />;
}

export interface AccordionItemProps
  extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
}

export function AccordionItem({
  className,
  ...props
}: AccordionItemProps) {
  return (
    <div
      className={cn("overflow-hidden rounded-2xl border border-gray-200", className)}
      {...props}
    />
  );
}

export function AccordionTrigger({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "flex w-full items-center justify-between bg-white px-4 py-3 text-left text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50",
        className
      )}
      {...props}
    />
  );
}

export interface AccordionContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
}

export function AccordionContent({
  className,
  open = false,
  ...props
}: AccordionContentProps) {
  if (!open) return null;

  return <div className={cn("border-t border-gray-200 p-4 text-sm text-gray-600", className)} {...props} />;
}