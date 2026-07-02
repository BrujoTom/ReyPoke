import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all duration-200 ease-out focus-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-coral text-foreground shadow-soft hover:-translate-y-0.5 hover:bg-coral-dark hover:shadow-soft-hover active:translate-y-0",
        secondary:
          "border border-border-subtle bg-surface text-foreground shadow-soft hover:-translate-y-0.5 hover:border-teal/30 hover:shadow-soft-hover",
        ghost:
          "text-teal-dark hover:bg-teal-soft/50",
        dark:
          "bg-teal-dark text-white shadow-soft hover:-translate-y-0.5 hover:bg-teal hover:shadow-soft-hover",
        outline:
          "border-2 border-foreground/15 bg-transparent text-foreground hover:border-teal-dark hover:bg-teal-soft/30",
      },
      size: {
        sm: "h-10 px-5 text-sm rounded-pill",
        md: "h-12 px-7 text-base rounded-pill",
        lg: "h-14 px-9 text-lg rounded-pill",
        icon: "h-10 w-10 rounded-pill",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
