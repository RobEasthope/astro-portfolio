import { cn } from "@/utils/tailwind";
import type React from "react";

// Component props
export type ExternalLinkProps = React.HTMLAttributes<HTMLAnchorElement> & {
  href: string;
  className?: string;
  children: React.ReactNode;
};

export function ExternalLink({
  href,
  children,
  className,
  ...rest
}: ExternalLinkProps) {
  if (!href && !children) {
    return null;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(className, "hover:text-saffron duration-300")}
      {...rest}
    >
      {children || null}
    </a>
  );
}
