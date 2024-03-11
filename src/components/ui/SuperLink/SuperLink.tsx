import { EmailLink } from '~/components/_base/EmailLink/EmailLink';
import { ExternalLink } from '~/components/_base/ExternalLink/ExternalLink';
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
