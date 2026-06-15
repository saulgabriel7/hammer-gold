export const SITE_NAME = "Hammer Gold";
export const SITE_DESCRIPTION =
  "Built by Athletes, For Athletes. Premium commercial gym equipment manufacturer since 1997.";

export const CDN_BASE =
  "https://cdn.yanrefitness.com/cdn-cgi/imagedelivery/m94-xP3Y6Xwv_FOE9Rj47w/www.yanrefitness.com/";

export const NAV_LINKS = [
  { label: "Strength Equipment", href: "/strength-equipment" },
  { label: "By Muscle Groups", href: "/by-muscle-groups" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_COLUMNS = [
  {
    title: "Products",
    links: [
      { label: "C4 Revival Series", href: "/strength-equipment#series" },
      { label: "C4D Dual Function", href: "/strength-equipment#series" },
      { label: "61A Racing Series", href: "/strength-equipment#series" },
      { label: "73 Tough Series", href: "/strength-equipment#series" },
      { label: "Multi Station", href: "/strength-equipment#series" },
      { label: "82 Plate Loaded", href: "/strength-equipment#series" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Product Catalogue", href: "/strength-equipment" },
      { label: "Certifications", href: "/strength-equipment#quality" },
      { label: "Compare Series", href: "/strength-equipment#comparison" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/strength-equipment" },
      { label: "Factory Tour", href: "/strength-equipment" },
      { label: "Testimonials", href: "/strength-equipment#testimonials" },
    ],
  },
] as const;

export const PRODUCTS_PER_PAGE = 9;
