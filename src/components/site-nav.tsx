"use client";

import { useEffect, useState } from "react";
import { Crest } from "./crest";
import { NAV_LINKS, TEL_HREF, MAILTO, PHONE_DISPLAY, BUSINESS } from "@/lib/site";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll + close on Escape while the mobile sheet is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-[40] flex justify-center px-4 pt-3 sm:pt-4">
      <nav
        className={[
          "flex w-full max-w-6xl items-center justify-between gap-4 rounded-full px-4 py-2.5 transition-all duration-300 sm:px-5",
          scrolled || open
            ? "border border-border bg-bg/85 shadow-[0_6px_24px_rgba(14,59,46,0.10)] backdrop-blur-md"
            : "border border-transparent bg-transparent",
        ].join(" ")}
      >
        <a
          href="#top"
          className="flex items-center gap-2.5"
          aria-label={`${BUSINESS.name} home`}
          onClick={() => setOpen(false)}
        >
          <Crest className="h-8 w-auto" />
          <span className="flex flex-col leading-[1.05]">
            <span className="font-display text-[0.95rem] text-ink sm:text-base">
              British American
            </span>
            <span className="text-[0.58rem] uppercase tracking-[0.16em] text-muted">
              Tennis &amp; Golf Academy
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="link-underline text-sm font-medium text-ink/80 hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5">
          <a href={TEL_HREF} className="btn-primary !px-4 !py-2 text-sm">
            <PhoneIcon />
            <span className="hidden sm:inline">Call or text</span>
            <span className="sm:hidden">Call</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-panel lg:hidden"
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </nav>

      {/* Mobile sheet — anchor menu, heritage-restrained. Closes on select. */}
      {open && (
        <div className="fixed inset-0 top-0 z-[-1] lg:hidden" aria-hidden>
          <button
            type="button"
            tabIndex={-1}
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 h-full w-full cursor-default bg-ink/20 backdrop-blur-[2px]"
          />
        </div>
      )}
      <div
        id="mobile-menu"
        className={[
          "absolute inset-x-4 top-[4.75rem] origin-top rounded-3xl border border-border bg-bg p-3 shadow-[0_16px_40px_rgba(14,59,46,0.16)] transition-all duration-300 lg:hidden",
          open
            ? "pointer-events-auto scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0",
        ].join(" ")}
      >
        <ul className="flex flex-col">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex min-h-[44px] items-center rounded-xl px-4 font-display text-lg text-ink transition-colors hover:bg-panel"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-2 flex flex-col gap-2 border-t border-border p-1 pt-3">
          <a
            href={TEL_HREF}
            onClick={() => setOpen(false)}
            className="btn-primary btn-sheen w-full justify-center"
          >
            <PhoneIcon />
            Call or text {PHONE_DISPLAY}
          </a>
          <a
            href={MAILTO}
            onClick={() => setOpen(false)}
            className="btn-ghost w-full justify-center"
          >
            Email Ryan
          </a>
        </div>
      </div>
    </header>
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

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      {open ? (
        <path
          d="M6 6l12 12M18 6L6 18"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M4 8h16M4 16h16"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}
