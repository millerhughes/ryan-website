/**
 * Placeholder — a clearly-marked image/content slot to swap in real assets
 * post-deploy (photography, testimonials). Diagonal-hatch frame + a label so
 * it never reads as finished design and every slot is trivial to find.
 *
 * SWAP: replace each <Placeholder> with a <next/image> (or real content) once
 * Ryan supplies photos. See intake.md "OPEN GAPS".
 */
export function Placeholder({
  label,
  ratio = "4 / 3",
  tone = "light",
  className,
}: {
  label: string;
  ratio?: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div
      className={[
        "placeholder-frame w-full overflow-hidden",
        dark && "border-cream-muted/40 !bg-[#0b2f25] text-cream-muted",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ aspectRatio: ratio }}
    >
      <div className="flex flex-col items-center gap-2 px-6 py-8">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect
            x="3"
            y="4"
            width="18"
            height="16"
            rx="1.5"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <circle cx="9" cy="10" r="1.8" stroke="currentColor" strokeWidth="1.4" />
          <path
            d="M4 17l4.5-4 3 2.5L15 12l5 5"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className={`eyebrow ${dark ? "eyebrow-on-ink" : ""}`}>{label}</span>
      </div>
    </div>
  );
}
