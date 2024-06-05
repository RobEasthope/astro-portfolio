import type React from "react";
import { ExternalLink } from "@/components/_base/ExternalLink/ExternalLink";
import { InternalLink } from "@/components/_base/InternalLink/InternalLink";
import { EmailLink } from "@/components/_base/EmailLink/EmailLink";

export type SuperLinkProps = {
  title: string;
  href: string;
  type?: "email" | "internal" | "external";
};

export type SuperLinkMarkupProps = React.HTMLAttributes<HTMLAnchorElement> & {
  href: string;
  className?: string;
  type?: "email" | "internal" | "external";
  children: React.ReactNode;
};

export function SuperLink({
  href,
  className,
  children,
  type,
  onClick,
  ...rest
}: SuperLinkMarkupProps) {
  if (!href && !children) {
    return null;
  }

  switch (type) {
    case "email":
      return (
        <EmailLink emailAddress={href} className={className} {...rest}>
          {children}
        </EmailLink>
      );

    case "internal":
      return (
        <InternalLink href={href} className={className} {...rest}>
          {children}
        </InternalLink>
      );

    case "external":
      return (
        <ExternalLink href={href} className={className} {...rest}>
          {children}
        </ExternalLink>
      );

    default:
      return null;
  }
}
