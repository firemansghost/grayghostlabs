import { EXTERNAL_LINKS, SITE_NAME, SITE_URL } from "@/lib/constants";

export const siteConfig = {
  name: SITE_NAME,
  url: SITE_URL,
  links: {
    newsletter: EXTERNAL_LINKS.substack,
    x: EXTERNAL_LINKS.x,
  },
} as const;
