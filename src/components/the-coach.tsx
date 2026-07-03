import { Reveal } from "./reveal";
import { Placeholder } from "./placeholder";

const CREDENTIALS = [
  { figure: "+2.4", label: "Lowest handicap" },
  { figure: "USPTR", label: "Certified tennis instructor" },
  { figure: "GLE", label: "Certified golf coach" },
  { figure: "2007", label: "Coaching since" },
];

export function TheCoach() {
  return (
    <section id="coach" className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-center text-4xl text-ink sm:text-5xl">
            Ryan Hughes
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted">
            British by training, Atlanta by choice. A genuinely elite player who
            teaches the game the way it was taught to him: correctly, and from
            the ground up.
          </p>
        </Reveal>

        {/* Credentials strip — each cell settles in on a gentle stagger */}
        <dl className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-4">
          {CREDENTIALS.map((c, i) => (
            <Reveal
              as="div"
              key={c.label}
              delay={140 + i * 110}
              className="flex flex-col items-center gap-1 bg-bg px-4 py-7 text-center"
            >
              <dt className="font-display text-3xl text-ink sm:text-4xl">
                {c.figure}
              </dt>
              <dd className="text-xs uppercase tracking-[0.14em] text-muted">
                {c.label}
              </dd>
            </Reveal>
          ))}
        </dl>

        {/* Story */}
        <div className="mt-16 grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <Placeholder
              label="Portrait, Ryan (headshot)"
              ratio="4 / 5"
            />
          </Reveal>

          <Reveal delay={80} className="order-1 lg:order-2">
            <div className="space-y-5 text-lg leading-relaxed text-ink/85">
              <p>
                I took up golf at six, in a family of golfers in Kent, England.
                My father and three of my four brothers played to a five
                handicap or better, and one of them came a section away from
                qualifying for the European PGA Tour. The standard at home was
                high, and it set the standard for how I coach now.
              </p>
              <p>
                In 2012 and 2013 I played the Atlanta Open Golf Mini Tour. I
                made the cut at the Georgia State Championships at Chateau Elan,
                beating around seventy fully qualified US PGA professionals to
                make the weekend. My lowest official handicap is a plus 2.4.
              </p>
              <p>
                I played tennis seriously from thirteen to twenty-three,
                finishing in college at the University of Southern Indiana. Two
                sports, one belief: the fundamentals are everything, and there
                is a right way to learn them.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
