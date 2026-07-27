import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border text-xs font-extrabold uppercase tracking-[0.08em] transition-[color,background-color,border-color,transform] duration-200 ease-out cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:size-4",
  {
    variants: {
      variant: {
        default: "border-primary bg-primary text-white hover:-translate-y-0.5 hover:bg-graphite",
        inverse: "border-white bg-white text-black hover:-translate-y-0.5 hover:bg-paper",
        outline: "border-border bg-transparent text-black hover:border-black hover:bg-paper",
        ghost: "border-transparent bg-transparent text-black hover:bg-paper",
      },
      size: {
        sm: "h-10 px-4 text-[11px]",
        default: "h-12 px-5",
        lg: "h-13 px-7",
        icon: "h-11 w-11 p-0",
        "icon-sm": "h-9 w-9 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, type = "button", ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
);
Button.displayName = "Button";

export { Button };
