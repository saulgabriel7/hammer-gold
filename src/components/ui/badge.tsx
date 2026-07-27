import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex min-h-7 items-center rounded-full border px-3 py-1 text-kicker font-bold uppercase tracking-[0.1em]",
  {
    variants: {
      variant: {
        default: "border-black bg-black text-white",
        outline: "border-border bg-background text-foreground",
        muted: "border-transparent bg-paper text-foreground",
      },
    },
    defaultVariants: { variant: "outline" },
  }
);

interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
