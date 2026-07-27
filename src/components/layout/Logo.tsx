import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  compact?: boolean;
}

export function Logo({ compact = false }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Hammer Gold — página inicial"
      className={
        compact
          ? "relative block h-[54px] w-[72px] shrink-0 overflow-hidden"
          : "relative block h-[54px] w-[72px] shrink-0 overflow-hidden sm:h-16 sm:w-[94px]"
      }
    >
      <Image
        src="/images/logo/logo-hammer-gold-transparente.png"
        alt="Hammer Gold"
        fill
        sizes={compact ? "72px" : "(max-width: 639px) 72px, 94px"}
        className="scale-[1.42] object-contain"
        priority
      />
    </Link>
  );
}
