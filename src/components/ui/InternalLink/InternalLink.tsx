import { cn } from "@/utils/tailwind";
import type React from "react";

// Component props
export type InternalLinkProps = React.HTMLAttributes<HTMLAnchorElement> & {
  href: string;
  className?: string;
  children: React.ReactNode;
};

export function InternalLink({
  href,
  children,
  className,
  ...rest
}: InternalLinkProps) {
  if (!href && !children) {
    return null;
  }

  return (
    <a
      href={href}
      className={cn(className, "hover:text-link duration-300")}
      {...rest}
    >
      {children}
    </a>
  );
}
