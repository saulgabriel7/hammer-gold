import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface NativeSelectProps extends React.ComponentProps<"select"> {
  containerClassName?: string;
}

const NativeSelect = React.forwardRef<HTMLSelectElement, NativeSelectProps>(
  ({ className, containerClassName, children, ...props }, ref) => (
    <div className={cn("relative", containerClassName)}>
      <select
        ref={ref}
        className={cn(
          "h-12 w-full appearance-none rounded-md border border-input bg-background px-4 pe-10 text-sm font-semibold text-foreground cursor-pointer outline-none transition-colors focus-visible:border-foreground focus-visible:ring-2 focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      >
        {children}
      </select>
      <ChevronDown
        className="pointer-events-none absolute inset-e-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
        aria-hidden="true"
      />
    </div>
  )
);
NativeSelect.displayName = "NativeSelect";

export { NativeSelect };
