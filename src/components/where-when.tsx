import { Reveal } from "./reveal";
import { TEL_HREF, MAILTO, PHONE_DISPLAY } from "@/lib/site";

/**
 * Visit — where and when you train. Two heritage columns: the settings Ryan
 * coaches in (studio / your course / on-course, plus service area) and how
 * booking works (by appointment, contact-only). The specific weekly hours are
 * a clearly-marked swap slot: Ryan to confirm, then delete the dashed note.
 */

const SETTINGS = [
  {
    title: "In the studio",
    body: "The indoor simulator runs through any weather, with the GC3 launch monitor and club fitting tools on hand.",
  },
  {
    title: "Your range or home course",
    body: "Sessions at the range or club you already play, reading real ball flight with the same measurement.",
  },
  {
    title: "On the course",
    body: "Playing lessons over nine or eighteen holes for course management, shot selection and the short game.",
  },
];

export function WhereWhen() {
  return (
    <section id="visit" className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow mb-3 text-center">Where &amp; when</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mx-auto max-w-2xl text-center text-4xl text-ink sm:text-5xl">
            Train where it suits you
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* Where — the settings */}
          <div>
            <ul className="space-y-8">
              {SETTINGS.map((s, i) => (
                <Reveal as="li" key={s.title} delay={i * 70}>
                  <div className="flex gap-4">
                    <span className="mt-1 font-display text-xl text-accent-ink">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-xl text-ink">{s.title}</h3>
                      <p className="mt-1.5 max-w-[46ch] leading-relaxed text-muted">
                        {s.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={240}>
              <p className="mt-9 border-t border-border pt-5 text-sm text-muted">
                <span className="font-semibold text-ink">Service area.</span>{" "}
                Coaching across Atlanta, Georgia and the surrounding area.
              </p>
            </Reveal>
          </div>

          {/* When — booking, by appointment */}
          <Reveal delay={120}>
            <div className="rounded-lg border border-border bg-panel/50 p-8">
              <h3 className="font-serif-bold text-2xl text-ink">By appointment</h3>
              <p className="mt-3 leading-relaxed text-muted">
                Ryan coaches by appointment, so sessions fit around your schedule
                and the studio or course you want to use. The quickest way to
                arrange one is a call or a text.
              </p>

              {/* SWAP SLOT — Ryan to confirm specific weekly availability, then
                  replace this dashed note with the real hours (and add
                  openingHoursSpecification in layout.tsx). */}
              <div className="mt-6 rounded-md border border-dashed border-border-ink/40 bg-bg/60 px-4 py-3">
                <p className="eyebrow mb-1">Typical hours</p>
                <p className="text-sm text-muted">
                  Weekly availability to be confirmed with Ryan.
                </p>
              </div>

              <div className="mt-7 flex flex-col gap-3">
                <a href={TEL_HREF} className="btn-primary btn-sheen w-full justify-center">
                  Check availability, {PHONE_DISPLAY}
                </a>
                <a href={MAILTO} className="btn-ghost w-full justify-center">
                  Ask a question
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
