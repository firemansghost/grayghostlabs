import { EXTERNAL_LINKS } from "@/lib/constants";

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export const mainNav: NavItem[] = [
  { label: "Markets", href: "/markets" },
  { label: "Sports Lab", href: "/sports-lab" },
  { label: "Roadmap", href: "/coming-soon" },
  { label: "About", href: "/about" },
];

export const externalNav: NavItem[] = [
  {
    label: "Newsletter",
    href: EXTERNAL_LINKS.substack,
    external: true,
  },
  {
    label: "X / Twitter",
    href: EXTERNAL_LINKS.x,
    external: true,
  },
];
