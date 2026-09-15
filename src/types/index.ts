export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup =
  | { label: string; href: string; items?: never }
  | { label: string; href?: never; items: NavItem[] };

export type FlatNavLink = { label: string; href: string };

export type Agent = {
  id: string;
  name: string;
  description: string;
};
