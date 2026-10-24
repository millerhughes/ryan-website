/**
 * FAQ content — single source of truth. Rendered by <Faq> AND emitted as
 * FAQPage JSON-LD in layout.tsx, so the two never drift (Google requires the
 * schema to match the visible answers). Keep answers true to intake.md and
 * free of em dashes. Update here and both places stay in sync.
 */
export const FAQS = [
  {
    q: "Do you coach beginners and juniors?",
    a: "Yes. Ryan coaches every age and level, from first-timers and junior players building their fundamentals to competitive adults sharpening their game.",
  },
  {
    q: "Which sports do you coach?",
    a: "Both tennis and golf, under one academy. You can train in either, or work on both with the same coach.",
  },
  {
    q: "Where do lessons take place?",
    a: "In the indoor studio simulator, at your own range or home course, or out on the course for playing lessons. Ryan coaches across Atlanta, Georgia and the surrounding area.",
  },
  {
    q: "Can we train indoors in bad weather?",
    a: "Yes. The indoor simulator means golf sessions run through any weather, measured on the same tour-tested GC3 launch monitor used outdoors.",
  },
  {
    q: "Do I need my own equipment?",
    a: "Bring your own clubs or racket if you have them. The studio is fully equipped for golf sessions, including the GC3 launch monitor and club fitting tools.",
  },
  {
    q: "What are your rates?",
    a: "Golf coaching starts at $125 per hour, with on-course playing lessons at $200 for nine holes and $300 for eighteen. Tennis rates are available on request.",
  },
  {
    q: "How do I book a lesson?",
    a: "Call or text Ryan on 678.478.8926, or email RyanBATGA@gmail.com. Tell him the sport, your level and when suits you, and he will arrange a time.",
  },
] as const;
