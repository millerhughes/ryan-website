import { Reveal } from "./reveal";
import { Crest } from "./crest";
import {
  TEL_HREF,
  MAILTO,
  PHONE_DISPLAY,
  CONTACT_EMAIL,
  BUSINESS,
} from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="bg-ink px-4 py-24 text-cream sm:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <div className="mb-7 flex justify-center">
            <span className="flex h-24 w-24 items-center justify-center rounded-full bg-bg shadow-md">
              <Crest className="h-16 w-auto" />
            </span>
          </div>
        </Reveal>
        <Reveal delay={60}>
          <p className="eyebrow eyebrow-on-ink mb-4">Book a lesson</p>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="text-4xl text-cream sm:text-5xl">
            Let&apos;s get you playing better
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-cream-muted">
            The quickest way to start is a call or a text. Tell Ryan the sport,
            your level and when suits you, and he will take it from there.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={TEL_HREF} className="btn-primary on-ink w-full sm:w-auto">
              Call or text {PHONE_DISPLAY}
            </a>
            <a href={MAILTO} className="btn-ghost on-ink w-full sm:w-auto">
              Email {CONTACT_EMAIL}
            </a>
          </div>
        </Reveal>

        <Reveal delay={300}>
          <p className="mt-8 text-sm uppercase tracking-[0.16em] text-cream-muted/70">
            {BUSINESS.city}
            <span aria-hidden className="mx-2 text-cream-muted/40">
              ·
            </span>
            Tennis &amp; Golf
          </p>
        </Reveal>
      </div>
    </section>
  );
}
