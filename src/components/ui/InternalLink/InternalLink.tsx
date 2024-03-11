import { cn } from "@/utils/tailwind";

// Component props
export type ExternalLinkProps = React.HTMLAttributes<HTMLAnchorElement> & {
  href: string | null;
  className?: string;
  children: any;
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
