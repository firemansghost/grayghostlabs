import Link, { LinkProps } from "next/link";
import { forwardRef } from "react";

export interface AppLinkProps extends Omit<LinkProps, "prefetch"> {
  prefetch?: boolean;
  children: React.ReactNode;
  className?: string;
}

/**
 * AppLink - Next.js Link wrapper that defaults prefetch to false
 * to reduce unused JavaScript on mobile Lighthouse audits.
 * Can still override with prefetch={true} if needed for specific links.
 */
export const AppLink = forwardRef<HTMLAnchorElement, AppLinkProps>(
  ({ prefetch = false, ...props }, ref) => {
    return <Link ref={ref} prefetch={prefetch} {...props} />;
  }
);

AppLink.displayName = "AppLink";

