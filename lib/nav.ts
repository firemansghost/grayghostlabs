import { EXTERNAL_LINKS } from "@/lib/constants";

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "GhostGauge", href: "/ghostgauge" },
  { label: "Ghost Allocator", href: "/ghost-allocator" },
  { label: "Gridiron Edge", href: "/sports/cfb/gridiron-edge" },
  { label: "Sports Lab", href: "/sports-lab" },
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



