import { Reveal } from "./reveal";

const GOLF = {
  items: [
    {
      title: "The focus",
      body: "All levels and ages. Beginners start with swing fundamentals. Intermediate players work drills on and off the course. Advanced players sharpen shot shaping, course management and the short game.",
    },
    {
      title: "Tournament coaching",
      body: "Practice schedules, tournament preparation, shot selection, clubface and swing adjustment, and the mental side. Short game and putting by appointment.",
    },
    {
      title: "Club fitting & repair",
      body: "Fitting tools in the studio, fully customizable clubs built to order, plus club assembly and regripping.",
    },
  ],
};

export function Disciplines() {
  return (
    <section id="coaching" className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-center text-4xl text-ink sm:text-5xl">
            Golf and tennis, coached properly
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Golf — fully documented */}
          <Reveal className="group flex flex-col rounded-lg border border-border bg-panel/60 p-8 sm:p-10">
            <div className="mb-6 flex items-center gap-3">
              <GolfIcon />
              <h3 className="font-serif-bold text-2xl text-ink">Golf</h3>
            </div>
            <p className="mb-8 max-w-[40ch] text-muted">
              Learn this great game correctly. Coaching runs from first-timers to
              competitive players.
            </p>
            <ul className="space-y-6">
              {GOLF.items.map((it) => (
                <li key={it.title}>
                  <h4 className="font-display text-lg text-ink">{it.title}</h4>
                  <p className="mt-1.5 max-w-[40ch] text-[0.95rem] leading-relaxed text-muted">
                    {it.body}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Tennis — structured, detail to be supplied */}
          <Reveal delay={80} className="group flex flex-col rounded-lg border border-border bg-panel/60 p-8 sm:p-10">
            <div className="mb-6 flex items-center gap-3">
              <TennisIcon />
              <h3 className="font-serif-bold text-2xl text-ink">Tennis</h3>
            </div>
            <p className="mb-8 max-w-[40ch] text-muted">
              Private tennis coaching for all ages and levels, from grip and
              footwork fundamentals to match play and competitive development.
            </p>
            <ul className="space-y-6">
              <li>
                <h4 className="font-display text-lg text-ink">Fundamentals</h4>
                <p className="mt-1.5 max-w-[40ch] text-[0.95rem] leading-relaxed text-muted">
                  {/* PLACEHOLDER COPY — confirm tennis detail with Ryan (intake.md gap 2) */}
                  Grip, stance, footwork and stroke mechanics built the right way
                  from the first lesson.
                </p>
              </li>
              <li>
                <h4 className="font-display text-lg text-ink">Match play</h4>
                <p className="mt-1.5 max-w-[40ch] text-[0.95rem] leading-relaxed text-muted">
                  {/* PLACEHOLDER COPY — confirm tennis detail with Ryan */}
                  Point construction, movement and the game sense that turns
                  practice into results on court.
                </p>
              </li>
              <li>
                <h4 className="font-display text-lg text-ink">Junior development</h4>
                <p className="mt-1.5 max-w-[40ch] text-[0.95rem] leading-relaxed text-muted">
                  {/* PLACEHOLDER COPY — confirm tennis detail with Ryan */}
                  Structured coaching for younger players, with an emphasis on
                  technique, discipline and enjoyment of the game.
                </p>
              </li>
            </ul>
            <p className="mt-8 text-xs uppercase tracking-[0.14em] text-muted/70">
              {/* Marked slot — swap when tennis content is supplied */}
              Tennis programme detail to be finalised
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// Golf flag in a hole. The pennant flutters from the pole on card hover.
function GolfIcon() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="shrink-0 text-ink"
    >
      <path
        d="M8 3.4 L16.4 5.6 L8 7.8 Z"
        fill="currentColor"
        className="origin-left transition-transform duration-500 ease-out [transform-box:fill-box] group-hover:-rotate-6"
      />
      <line
        x1="8"
        y1="3"
        x2="8"
        y2="18.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <ellipse cx="8" cy="19.2" rx="5.6" ry="1.7" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

// Tennis ball. The seams turn gently on card hover, as if the ball rolls.
function TennisIcon() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="shrink-0 text-ink"
    >
      <circle cx="12" cy="12" r="8.4" stroke="currentColor" strokeWidth="1.6" />
      <g className="origin-center transition-transform duration-700 ease-out [transform-box:fill-box] group-hover:rotate-[22deg]">
        <path
          d="M6.1 6.1 C10.6 9 10.6 15 6.1 17.9"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M17.9 6.1 C13.4 9 13.4 15 17.9 17.9"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
