import * as React from "react";
import { cn } from "../../lib/cn.js";

export interface CommandPaletteProps
  extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
}

export function CommandPalette({
  className,
  open = true,
  ...props
}: CommandPaletteProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 p-4 pt-24">
      <div
        className={cn(
          "w-full max-w-2xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl",
          className
        )}
        role="dialog"
        aria-modal="true"
        {...props}
      />
    </div>
  );
}

export function CommandPaletteInput({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-12 w-full border-b border-gray-200 bg-transparent px-4 text-sm text-gray-900 outline-none placeholder:text-gray-400",
        className
      )}
      placeholder="Search commands..."
      {...props}
    />
  );
}

export function CommandPaletteList({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("max-h-80 overflow-y-auto p-2", className)} {...props} />;
}

export function CommandPaletteGroup({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mb-2", className)} {...props} />;
}

export function CommandPaletteGroupLabel({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("px-2 py-1 text-xs font-medium uppercase tracking-wide text-gray-500", className)} {...props} />;
}

export function CommandPaletteItem({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900",
        className
      )}
      {...props}
    />
  );
}

export function CommandPaletteEmpty({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 text-center text-sm text-gray-500", className)} {...props} />;
}