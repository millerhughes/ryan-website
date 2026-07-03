import { Crest } from "./crest";
import { Reveal } from "./reveal";
import { Placeholder } from "./placeholder";
import { TEL_HREF, MAILTO, PHONE_DISPLAY, BUSINESS } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-4 pb-14 pt-24 sm:pb-16 sm:pt-28 lg:pb-20 lg:pt-28"
    >
      <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* Left — the pitch */}
        <div className="text-center lg:text-left">
          <Reveal>
            <div className="mb-4 flex justify-center lg:justify-start">
              <Crest className="h-14 w-auto" />
            </div>
          </Reveal>

          <Reveal delay={60}>
            <p className="eyebrow mb-3">
              {BUSINESS.city}
              <span aria-hidden className="mx-2 text-muted/40">
                ·
              </span>
              Established 2007
            </p>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="hero-shine pb-[0.12em] text-[2.5rem] leading-[1.05] text-ink sm:text-5xl lg:text-[3.6rem]">
              Sharpen skills.
              <br />
              Perfect swings.
              <br />
              Learn properly.
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-muted lg:mx-0">
              Private tennis and golf coaching in Atlanta from a British-trained
              coach who still competes in the game. Every level, taught properly.
            </p>
          </Reveal>

          <Reveal trigger="load" delay={1200}>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <a
                href={TEL_HREF}
                className="btn-primary btn-lg btn-sheen w-full sm:w-auto"
              >
                <PhoneIcon />
                Call or text {PHONE_DISPLAY}
              </a>
              <a href={MAILTO} className="btn-ghost w-full sm:w-auto">
                Email Ryan
              </a>
            </div>
          </Reveal>

          <Reveal trigger="load" delay={1450}>
            <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted lg:justify-start">
              <li className="flex items-center gap-2">
                <Dot /> +2.4 golf handicap
              </li>
              <li className="flex items-center gap-2">
                <Dot /> USPTR certified
              </li>
              <li className="flex items-center gap-2">
                <Dot /> Tennis &amp; golf
              </li>
            </ul>
          </Reveal>
        </div>

        {/* Right — hero portrait slot */}
        <Reveal delay={200} className="relative">
          <div className="relative">
            <Placeholder
              label="Hero photo, Ryan coaching or on the course"
              ratio="4 / 5"
              className="shadow-[0_20px_50px_-20px_rgba(14,59,46,0.4)]"
            />
            {/* Small crest tab, a heritage seal on the image corner */}
            <div className="absolute -bottom-4 -left-4 hidden h-20 w-20 items-center justify-center rounded-full border border-border bg-bg shadow-md sm:flex">
              <Crest className="h-11 w-auto" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Dot() {
  return <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />;
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6.5 3h3l1.5 4-2 1.5a12 12 0 005 5l1.5-2 4 1.5v3a2 2 0 01-2.2 2A16 16 0 014.5 5.2 2 2 0 016.5 3z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}
