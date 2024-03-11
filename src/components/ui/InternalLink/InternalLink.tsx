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

  if (!href) {
    return <span className={className}>{children || null}</span>;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(className, 'hover:text-saffron duration-300')}
      {...rest}
    >
      {children || null}
    </a>
  );
}
