import { Reveal } from "./reveal";
import { FAQS } from "@/lib/faq";
import { TEL_HREF, PHONE_DISPLAY } from "@/lib/site";

/**
 * FAQ — objection-handlers and the questions players actually ask. Content lives
 * in lib/faq.ts and is mirrored into FAQPage JSON-LD (layout.tsx) for answer
 * engines. Native <details> so it works without JS and stays accessible.
 */
export function Faq() {
  return (
    <section id="faq" className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="eyebrow mb-3 text-center">Questions</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mx-auto max-w-2xl text-center text-4xl text-ink sm:text-5xl">
            Good to know
          </h2>
        </Reveal>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 40}>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left">
                  <span className="font-display text-lg text-ink sm:text-xl">
                    {f.q}
                  </span>
                  <PlusIcon />
                </summary>
                <p className="max-w-[60ch] pb-6 leading-relaxed text-muted">
                  {f.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <p className="mt-10 text-center text-sm text-muted">
            Still deciding?{" "}
            <a href={TEL_HREF} className="link-underline font-semibold text-ink">
              Call or text {PHONE_DISPLAY}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// Plus that rotates to a minus when its <details> is open.
function PlusIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="shrink-0 text-accent-ink transition-transform duration-300 ease-out group-open:rotate-45"
    >
      <path
        d="M12 5v14M5 12h14"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}
