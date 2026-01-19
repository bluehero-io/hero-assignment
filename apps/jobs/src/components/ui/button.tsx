import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

/**
 * Props for the Button component.
 */
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "default" | "ghost";
};

/**
 * ShadCN-inspired button component.
 */
export function Button({
  asChild = false,
  className,
  variant = "default",
  ...props
}: ButtonProps) {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition",
        variant === "default" &&
          "bg-white text-ink shadow-glow hover:-translate-y-0.5 hover:shadow-glow/80",
        variant === "ghost" &&
          "border border-white/30 text-white/90 hover:border-white/60 hover:text-white",
        className
      )}
      {...props}
    />
  );
}
