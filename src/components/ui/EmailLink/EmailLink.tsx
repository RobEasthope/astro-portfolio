import { cn } from "@/utils/tailwind";
import type React from "react";

// Component props
export type EmailLinkProps = React.HTMLAttributes<HTMLAnchorElement> & {
  emailAddress: string;
  className?: string;
  children: React.ReactNode;
};

export function EmailLink({
  emailAddress,
  children,
  className,
  ...rest
}: EmailLinkProps) {
  if (!emailAddress && !children) {
    return null;
  }

  return (
    <a
      href={`mailto:${emailAddress}`}
      className={cn(className, "hover:text-saffron duration-300")}
      {...rest}
    >
      {children}
    </a>
  );
}
