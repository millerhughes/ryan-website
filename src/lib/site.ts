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

export const NAV_LINKS = [
  { label: "The Coach", href: "#coach" },
  { label: "Coaching", href: "#coaching" },
  { label: "Method", href: "#method" },
  { label: "Rates", href: "#rates" },
  { label: "Contact", href: "#contact" },
] as const;
