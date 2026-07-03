import { Reveal } from "./reveal";
import { TEL_HREF, PHONE_DISPLAY } from "@/lib/site";

// Golf rates as printed (intake.md). Tennis rates unknown — the layout accepts
// a second group without redesign. Swap when Ryan supplies tennis pricing.
const GOLF_RATES = [
  { price: "$125", unit: "per hour", note: "Your range or home course" },
  { price: "$125", unit: "per hour", note: "In the studio" },
  { price: "$200", unit: "9 holes", note: "On-course playing lesson" },
  { price: "$300", unit: "18 holes", note: "On-course playing lesson" },
];

export function Rates() {
  return (
    <section id="rates" className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-center text-4xl text-ink sm:text-5xl">
            Straightforward pricing
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mx-auto mt-4 max-w-xl text-center text-lg text-muted">
            Book by the hour or by the round. Call or text to arrange a session
            that suits you.
          </p>
        </Reveal>

        <div className="mt-12">
          <Reveal>
            <h3 className="mb-4 font-serif-bold text-2xl text-ink">Golf</h3>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {GOLF_RATES.map((r, i) => (
              <Reveal
                key={`${r.price}-${r.unit}-${i}`}
                delay={i * 60}
                className="flex flex-col rounded-lg border border-border bg-panel/50 p-6"
              >
                <span className="font-display text-4xl text-ink">{r.price}</span>
                <span className="mt-1 text-sm font-semibold uppercase tracking-[0.12em] text-accent-ink">
                  {r.unit}
                </span>
                <span className="mt-3 text-sm text-muted">{r.note}</span>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Tennis rates slot — structured, awaiting pricing */}
        <div className="mt-10">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-4 rounded-lg border border-dashed border-border-ink/40 bg-panel/30 p-6 sm:flex-row sm:items-center">
              <div>
                <h3 className="font-serif-bold text-2xl text-ink">Tennis</h3>
                <p className="mt-1 text-sm text-muted">
                  {/* Marked slot — swap when tennis rates are supplied */}
                  Tennis lesson rates available on request. Get in touch and
                  Ryan will talk you through the options.
                </p>
              </div>
              <a href={TEL_HREF} className="btn-ghost shrink-0">
                Ask about tennis
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <p className="mt-10 text-center text-sm text-muted">
            Ready to book?{" "}
            <a href={TEL_HREF} className="link-underline font-semibold text-ink">
              Call or text {PHONE_DISPLAY}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
