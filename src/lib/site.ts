/**
 * Central site config for British American Tennis and Golf Academy (BATGA).
 * Contact details drive nav, hero, contact section, footer. Booking is
 * contact-only (call / text / email), so these are the whole conversion path.
 */

// Ryan's number, in call/text and human-readable forms.
export const PHONE_DISPLAY = "678.478.8926";
export const PHONE_TEL = "+16784788926"; // E.164 for tel: links
export const CONTACT_EMAIL = "RyanBATGA@gmail.com";

export const TEL_HREF = `tel:${PHONE_TEL}`;
export const MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  "Coaching enquiry, BATGA"
)}&body=${encodeURIComponent(
  "Hi Ryan,\n\nI'd like to book a lesson.\n\nSport (tennis / golf): ____\nLevel: ____\nPreferred days/times: ____\n\nThanks,"
)}`;

export const BUSINESS = {
  name: "British American Tennis and Golf Academy",
  short: "BATGA",
  city: "Atlanta, Georgia",
  region: "Atlanta, Georgia",
} as const;

// Production URL — drives canonical, Open Graph, Twitter card, sitemap, robots
// and JSON-LD. Set to Ryan's real domain (address of record) even though it is
// not connected to Vercel yet: this only writes metadata strings, so pointing
// it at the final domain now means launch needs zero code changes. Single
// source of truth. Match apex vs www to however the domain is finally served.
export const SITE_URL = "https://britishamericantennisgolfacademy.com";

export const NAV_LINKS = [
  { label: "The Coach", href: "#coach" },
  { label: "Coaching", href: "#coaching" },
  { label: "Method", href: "#method" },
  { label: "Rates", href: "#rates" },
  { label: "Visit", href: "#visit" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;
