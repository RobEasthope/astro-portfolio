/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { EmailLinkWithTitleSchemaProps } from '~/components/_base/EmailLink/EmailLink';
import { EmailLink } from '~/components/_base/EmailLink/EmailLink';
import type {
  ExternalLinkSchemaProps,
  ExternalLinkWithTitleSchemaProps,
} from '~/components/_base/ExternalLink/ExternalLink';
import { ExternalLink } from '~/components/_base/ExternalLink/ExternalLink';
import type {
  InternalLinkSchemaProps,
  InternalLinkWithTitleSchemaProps,
} from '~/components/_base/InternalLink/InternalLink';
import { InternalLink } from '~/components/_base/InternalLink/InternalLink';

export type SuperLinkProps = React.HTMLAttributes<HTMLAnchorElement> & {
  href: string;
  className?: string;
  children: unknown;
  type?: 'email' | 'internal' | 'external';
};

export function SuperLink({
  href,
  className,
  children,
  type,
  onClick,
  ...rest
}: SuperLinkProps) {
  if (!href && !children) {
    return null;
  }

  switch (type) {
    case 'email':
      return (
        <EmailLink
          email={href}
          className={className}
          {...rest}
        >
          {children}
        </EmailLink>
      );

    case 'internal':
      return (
        <InternalLink
          href={href}
          className={className}
          {...rest}
        >
          {children}
        </InternalLink>
      );

    case 'external':
      return (
        <ExternalLink
          href={href}
          className={className}
          {...rest}
        >
          {children}
        </ExternalLink>
      );

    default:
      return null;
  }
}
