"use client";

import { useEffect, useState } from "react";
import { TEL_HREF, MAILTO, PHONE_DISPLAY } from "@/lib/site";

/**
 * Persistent bottom "Call or text" bar for phones only (lg:hidden).
 * A phone-first coaching business lives on the tap-to-call, so keep it one
 * thumb-reach away. Appears once the hero has scrolled past; hides again while
 * the Contact section is on screen so the primary CTA never doubles up.
 */
export function MobileCallBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Hide the bar while the contact section is in view.
    const contact = document.getElementById("contact");
    let atContact = false;
    const io = contact
      ? new IntersectionObserver(
          ([e]) => {
            atContact = e.isIntersecting;
            if (atContact) setVisible(false);
            else onScroll();
          },
          { rootMargin: "0px 0px -40% 0px" }
        )
      : null;
    if (contact && io) io.observe(contact);

    return () => {
      window.removeEventListener("scroll", onScroll);
      io?.disconnect();
    };
  }, []);

  return (
    <div
      className={[
        "fixed inset-x-0 bottom-0 z-[45] px-3 pb-[calc(0.6rem+env(safe-area-inset-bottom))] pt-2 transition-all duration-300 lg:hidden",
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-full opacity-0",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-md items-center gap-2 rounded-full border border-border bg-bg/90 p-1.5 shadow-[0_8px_28px_rgba(14,59,46,0.18)] backdrop-blur-md">
        <a
          href={TEL_HREF}
          className="btn-primary btn-sheen flex-1 justify-center !py-3 text-sm"
        >
          <PhoneIcon />
          Call or text {PHONE_DISPLAY}
        </a>
        <a
          href={MAILTO}
          aria-label="Email Ryan"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink text-ink transition-colors hover:bg-ink hover:text-cream"
        >
          <MailIcon />
        </a>
      </div>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6.5 3h3l1.5 4-2 1.5a12 12 0 005 5l1.5-2 4 1.5v3a2 2 0 01-2.2 2A16 16 0 014.5 5.2 2 2 0 016.5 3z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M4 7l8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
