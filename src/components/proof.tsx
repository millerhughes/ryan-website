import { Reveal } from "./reveal";

// Two real testimonials collected from Ryan's texts (2026-10-24). The first
// client's name wasn't visible in the screenshot — Miller will supply it;
// until then it's a clearly-marked slot, not an invented name. Do not ship
// a guessed name as real. Third card stays an honest placeholder (no tennis
// testimonial collected yet — intake.md gap 4).
const TESTIMONIALS = [
  {
    quote:
      "Your tweaks to my swing made a huge difference! From the senior tees, 74 and 78 with my own ball, lots of GIRs and par saves from 60-100 yards out.",
    name: null,
    sport: "Golf",
  },
  {
    quote:
      "Low round ever today — 69 in the Member-Member. Thanks for your coaching and friendship, brother!!!",
    name: "Brent",
    sport: "Golf",
  },
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
            Testimonials from Ryan&apos;s players.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              key={t.quote}
              delay={i * 70}
              className="flex flex-col rounded-lg border border-border bg-panel/30 p-8"
            >
              <QuoteMark />
              <p className="mt-4 flex-1 font-display text-xl leading-snug text-ink">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg text-xs uppercase tracking-wide text-muted">
                  {(t.name ?? t.sport)[0]}
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-ink/60">
                    {t.name ?? "Name to come"}
                  </span>
                  <span className="text-xs uppercase tracking-[0.14em] text-muted/70">
                    {t.sport} client
                  </span>
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal
            delay={TESTIMONIALS.length * 70}
            className="flex flex-col rounded-lg border border-dashed border-border-ink/40 bg-panel/30 p-8"
          >
            <QuoteMark />
            <p className="mt-4 flex-1 font-display text-xl leading-snug text-ink/40">
              A short, genuine quote from a tennis client goes here once
              collected.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg text-xs uppercase tracking-wide text-muted">
                T
              </span>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-ink/60">
                  Tennis client
                </span>
                <span className="text-xs uppercase tracking-[0.14em] text-muted/70">
                  Client testimonial to come
                </span>
              </div>
            </div>
          </Reveal>
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
