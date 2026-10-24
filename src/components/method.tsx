import Image from "next/image";
import { Reveal } from "./reveal";

const POINTS = [
  {
    title: "Tour-tested measurement",
    body: "Every session can be run on the GC3 launch monitor, the same technology used on tour. It records and analyses your numbers so we set a baseline and target real improvements, not guesses.",
  },
  {
    title: "Indoors and out",
    body: "Practice in the studio simulator through any weather, then take the same monitor to your range or club to read ball flight in the open air. On-course playing lessons tie it together.",
  },
  {
    title: "Data with a purpose",
    body: "The numbers are a tool, never the point. They show what your swing is actually doing so the coaching is precise and the progress is measurable.",
  },
];

export function Method() {
  return (
    <section id="method" className="bg-ink px-4 py-24 text-cream sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow eyebrow-on-ink mb-4">Method &amp; technology</p>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="max-w-md text-4xl text-cream sm:text-5xl">
                Old-school teaching, measured precisely
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-cream-muted">
                The fundamentals do not change. The way we check them has. Good
                coaching and honest data together get you better, faster.
              </p>
            </Reveal>

            <ul className="mt-10 space-y-8">
              {POINTS.map((p, i) => (
                <Reveal as="li" key={p.title} delay={160 + i * 60}>
                  <div className="flex gap-4">
                    <span className="mt-1 font-display text-xl text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-xl text-cream">
                        {p.title}
                      </h3>
                      <p className="mt-1.5 leading-relaxed text-cream-muted">
                        {p.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal delay={120}>
            <div className="relative">
              <div
                className="w-full overflow-hidden rounded-[3px] border border-cream-muted/40"
                style={{ aspectRatio: "4 / 5" }}
              >
                <Image
                  src="/studio-sim.jpg"
                  alt="Junior player training in the British American Tennis and Golf Academy indoor golf simulator studio"
                  width={1191}
                  height={1443}
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-xs uppercase tracking-[0.14em] text-cream-muted/70">
                <span>GC3 launch monitor</span>
                <span>Studio &amp; on-course</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
