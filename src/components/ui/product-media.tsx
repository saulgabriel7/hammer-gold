import type { ReactNode } from "react";
import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface ProductMediaProps {
  src: ImageProps["src"];
  alt: string;
  sizes: string;
  priority?: boolean;
  unoptimized?: boolean;
  fit?: "contain" | "cover";
  className?: string;
  imageClassName?: string;
  children?: ReactNode;
}

export function ProductMedia({
  src,
  alt,
  sizes,
  priority = false,
  unoptimized = false,
  fit = "contain",
  className,
  imageClassName,
  children,
}: ProductMediaProps) {
  return (
    <div
      className={cn("product-media product-surface", className)}
      data-product-media="true"
      data-fit={fit}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        unoptimized={unoptimized}
        className={cn(
          "product-media__image",
          fit === "cover" && "product-media__image--cover",
          imageClassName
        )}
      />
      {children}
    </div>
  );
}
