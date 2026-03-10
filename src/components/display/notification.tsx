import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn.js";

const notificationVariants = cva(
  "rounded-2xl border p-4 shadow-sm",
  {
    variants: {
      variant: {
        default: "border-gray-200 bg-white text-gray-900",
        success: "border-green-200 bg-green-50 text-green-800",
        warning: "border-yellow-200 bg-yellow-50 text-yellow-800",
        danger: "border-red-200 bg-red-50 text-red-800",
        info: "border-blue-200 bg-blue-50 text-blue-800",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface NotificationProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof notificationVariants> {}

export function Notification({
  className,
  variant,
  ...props
}: NotificationProps) {
  return (
    <div
      className={cn(notificationVariants({ variant }), className)}
      role="status"
      {...props}
    />
  );
}

export function NotificationTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h4 className={cn("font-semibold", className)} {...props} />;
}

export function NotificationDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("mt-1 text-sm opacity-90", className)} {...props} />;
}

export function NotificationActions({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mt-4 flex items-center gap-2", className)} {...props} />;
}