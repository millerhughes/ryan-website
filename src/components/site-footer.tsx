import { Crest } from "./crest";
import {
  NAV_LINKS,
  TEL_HREF,
  MAILTO,
  PHONE_DISPLAY,
  CONTACT_EMAIL,
  BUSINESS,
} from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-bg px-4 py-14">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Crest className="h-11 w-auto" />
            <span className="flex flex-col leading-tight">
              <span className="font-display text-lg text-ink">British American</span>
              <span className="text-[0.66rem] uppercase tracking-[0.16em] text-muted">
                Tennis and Golf Academy
              </span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            {BUSINESS.name}. Private tennis and golf coaching in{" "}
            {BUSINESS.city}. British-trained, USPTR certified, a +2.4 golf
            handicap.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="eyebrow mb-4">Explore</p>
          <ul className="space-y-2.5">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="link-underline text-sm text-ink/80 hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="eyebrow mb-4">Get in touch</p>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a href={TEL_HREF} className="link-underline text-ink/80 hover:text-ink">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={MAILTO} className="link-underline text-ink/80 hover:text-ink">
                {CONTACT_EMAIL}
              </a>
            </li>
            <li className="pt-1 text-muted">{BUSINESS.city}</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted sm:flex-row">
        <span>
          &copy; {year} {BUSINESS.name}
        </span>
        <span className="uppercase tracking-[0.14em]">Learn properly</span>
      </div>
    </footer>
  );
}
