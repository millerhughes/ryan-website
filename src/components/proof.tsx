import { Reveal } from "./reveal";

// PLACEHOLDER TESTIMONIALS — structured for drop-in. Swap quote/name/detail
// with real client testimonials once collected (intake.md gap 4). Do not ship
// invented names as real: these three are clearly-marked slots.
const SLOTS = [
  { sport: "Golf", detail: "Client testimonial to come" },
  { sport: "Tennis", detail: "Client testimonial to come" },
  { sport: "Junior", detail: "Parent testimonial to come" },
];

export function Proof() {
  return (
    <section id="proof" className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-center text-4xl text-ink sm:text-5xl">
            What players say
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mx-auto mt-4 max-w-xl text-center text-lg text-muted">
            Testimonials from Ryan&apos;s players will appear here.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SLOTS.map((s, i) => (
            <Reveal
              key={s.sport}
              delay={i * 70}
              className="flex flex-col rounded-lg border border-dashed border-border-ink/40 bg-panel/30 p-8"
            >
              <QuoteMark />
              <p className="mt-4 flex-1 font-display text-xl leading-snug text-ink/40">
                A short, genuine quote from a {s.sport.toLowerCase()} client
                goes here once collected.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg text-xs uppercase tracking-wide text-muted">
                  {s.sport[0]}
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-ink/60">
                    {s.sport} client
                  </span>
                  <span className="text-xs uppercase tracking-[0.14em] text-muted/70">
                    {s.detail}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteMark() {
  return (
    <span className="font-display text-5xl leading-none text-accent" aria-hidden>
      &ldquo;
    </span>
  );
}
